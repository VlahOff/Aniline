import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, map, of, switchMap } from "rxjs";

import { environment } from "src/environments/environment";
import * as fromApp from '../+store/app.reducer';
import * as AppStateActions from '../+store/appState.actions';
import {
  ChartDataResponse,
  CoinsView,
  CoinsViewResponse,
  DetailedCoinDataResponse, GlobalData, GlobalDataResponse
} from "../interfaces";
import * as CryptoActions from './crypto.actions';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const coinViewResponse = (data: CoinsViewResponse[]) => {
  const result: CoinsView[] = [];
  data.forEach(v => {
    result.push(new CoinsView(
      v.id,
      v.name,
      v.symbol,
      v.total_supply,
      v.last_updated,
      v.current_price,
      v.market_cap,
      v.price_change_percentage_1h_in_currency,
      v.price_change_percentage_24h_in_currency,
      v.price_change_percentage_7d_in_currency,
      v.image
    ));
  });

  return result;
};

const handleError = (error: any) => {
  let errorMessage = `${error!.statusText} - ${error?.status}`
  if (error?.status == '429') {
    errorMessage = 'Crypto API too many request sent in a short time!!!'    
  }
  return of(AppStateActions.setError({ payload: errorMessage }));
};

@Injectable()
export class CryptoEffects {
  fetchGlobalData$ = createEffect(() => this.actions$.pipe(
    ofType(CryptoActions.fetchGlobalData),
    switchMap(() => {
      this.store.dispatch(AppStateActions.loadStart());
      return this.http
        .get<GlobalDataResponse>(environment.cryptoApi + '/getGlobalData', httpOptions)
        .pipe(
          map(data => {
            return CryptoActions.setGlobalData(
              {
                payload: new GlobalData(
                  data.total_market_cap,
                  data.market_cap_change_percentage_24h_usd,
                  data.trading_volume,
                  data.btc_dominance,
                  data.number_of_coins
                )
              });
          }),
          catchError(err => {
            this.store.dispatch(AppStateActions.loadEnd());
            return handleError(err);
          })
        );
    }),

  ));

  fetchTopHundredData$ = createEffect(() => this.actions$.pipe(
    ofType(CryptoActions.fetchTopHundred),
    switchMap(() => {
      return this.http
        .get<CoinsViewResponse[]>(environment.cryptoApi + '/topHundred', httpOptions)
        .pipe(
          map(data => coinViewResponse(data)),
          map(data => {
            this.store.dispatch(AppStateActions.loadEnd());
            return CryptoActions.setTopHundred({ payload: data });
          }),
          catchError(err => {
            this.store.dispatch(AppStateActions.loadEnd());
            return handleError(err);
          })
        );
    }),
  ));

  fetchNewCoins$ = createEffect(() => this.actions$.pipe(
    ofType(CryptoActions.fetchNewCoins),
    switchMap(() => {
      this.store.dispatch(AppStateActions.loadStart());
      return this.http
        .get<CoinsViewResponse[]>(environment.cryptoApi + '/newCoins', httpOptions)
        .pipe(
          map(data => coinViewResponse(data)),
          map(data => {
            this.store.dispatch(AppStateActions.loadEnd());
            return CryptoActions.setNewCoins({ payload: data });
          }),
          catchError(err => {
            this.store.dispatch(AppStateActions.loadEnd());
            return handleError(err);
          })
        );
    }),
  ));

  fetchTopThree$ = createEffect(() => this.actions$.pipe(
    ofType(CryptoActions.fetchTopThree),
    switchMap(() => {
      this.store.dispatch(AppStateActions.loadStart());
      return this.http
        .get<CoinsViewResponse[]>(environment.cryptoApi + '/topThree', httpOptions)
        .pipe(
          map(data => coinViewResponse(data)),
          map(data => {
            this.store.dispatch(AppStateActions.loadEnd());
            return CryptoActions.setTopThree({ payload: data });
          }),
          catchError(err => {
            this.store.dispatch(AppStateActions.loadEnd());
            return handleError(err);
          })
        );
    }),
  ));

  fetchCoinDetails$ = createEffect(() => this.actions$.pipe(
    ofType(CryptoActions.fetchCoinDetails),
    switchMap((state) => {
      this.store.dispatch(AppStateActions.loadStart());
      let params = new HttpParams();
      params = params.append('coinId', state.payload);

      return this.http
        .get<DetailedCoinDataResponse>(environment.cryptoApi + '/getCoinDetails',
          {
            params: params,
            headers: httpOptions.headers
          })
        .pipe(
          map(data => {
            this.store.dispatch(AppStateActions.loadEnd());
            return CryptoActions.setCoinDetails({ payload: data });
          }),
          catchError(err => {
            this.store.dispatch(AppStateActions.loadEnd());
            return handleError(err);
          })
        );
    }),
  ));

  fetchCoinDetailsChartData$ = createEffect(() => this.actions$.pipe(
    ofType(CryptoActions.fetchChartData),
    switchMap((state) => {
      this.store.dispatch(AppStateActions.loadStart());
      let params = new HttpParams();
      params = params.append('coinId', state.payload.coinId);
      params = params.append('days', state.payload.days);

      return this.http
        .get<ChartDataResponse>(environment.cryptoApi + '/getCoinChartData',
          {
            params: params,
            headers: httpOptions.headers
          })
        .pipe(
          map(data => data.chartData),
          map(data => {
            this.store.dispatch(AppStateActions.loadEnd());
            return CryptoActions.setChartData({ payload: data });
          }),
          catchError(err => {
            this.store.dispatch(AppStateActions.loadEnd());
            return handleError(err);
          })
        );
    }),
  ));

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) { }
}