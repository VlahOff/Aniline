import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";

import { environment } from "src/environments/environment";
import { GlobalData, GlobalDataResponse, NewCoin, NewCoinsResponse, TopHundred, TopHundredResponse } from "../interfaces";
import * as CryptoActions from './crypto.actions';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class CryptoEffects {
  fetchGlobalData$ = createEffect(() => this.actions$.pipe(
    ofType(CryptoActions.fetchGlobalData),
    switchMap(() => {
      return this.http
        .get<GlobalDataResponse>(environment.cryptoApi + '/getGlobalData', httpOptions);
    }),
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
    })
  ));

  fetchTopHundredData$ = createEffect(() => this.actions$.pipe(
    ofType(CryptoActions.fetchTopHundred),
    switchMap(() => {
      return this.http
        .get<TopHundredResponse[]>(environment.cryptoApi + '/topHundred', httpOptions);
    }),
    map(data => {
      const result: TopHundred[] = [];
      data.forEach(v => {
        result.push(new TopHundred(
          v.id,
          v.name,
          v.symbol,
          v.total_supply,
          v.last_updated,
          v.current_price,
          v.market_cap,
          v.price_change_24h,
          v.price_change_percentage_24h,
          v.price_change_percentage_1h_in_currency,
          v.price_change_percentage_24h_in_currency,
          v.price_change_percentage_7d_in_currency,
          v.image
        ));
      });
      return result;
    }),
    map(data => {
      return CryptoActions.setTopHundred({ payload: data });
    })
  ));

  fetchNewCoins$ = createEffect(() => this.actions$.pipe(
    ofType(CryptoActions.fetchNewCoins),
    switchMap(() => {
      return this.http
        .get<NewCoinsResponse[]>(environment.cryptoApi + '/newCoins', httpOptions);
    }),
    map(data => {
      const res: NewCoin[] = [];

      data.forEach(v => {
        res.push(new NewCoin(
          v.id,
          v.name,
          v.symbol,
          v.total_supply,
          v.last_updated,
          v.price,
          v.volume_24h,
          v.volume_change_24h,
          v.percent_change_1h,
          v.percent_change_24h,
          v.percent_change_7d,
          v.image
        ));
      });

      return res;
    }),
    map(data => {
      return CryptoActions.setNewCoins({ payload: data });
    })
  ));

  fetchTopThree$ = createEffect(() => this.actions$.pipe(
    ofType(CryptoActions.fetchTopThree),
    switchMap(() => {
      return this.http
        .get<TopHundredResponse[]>(environment.cryptoApi + '/topThree', httpOptions);
    }),
    map(data => {
      const result: TopHundred[] = [];
      data.forEach(v => {
        result.push(new TopHundred(
          v.id,
          v.name,
          v.symbol,
          v.total_supply,
          v.last_updated,
          v.current_price,
          v.market_cap,
          v.price_change_24h,
          v.price_change_percentage_24h,
          v.price_change_percentage_1h_in_currency,
          v.price_change_percentage_24h_in_currency,
          v.price_change_percentage_7d_in_currency,
          v.image
        ));
      });
      return result;
    }),
    map(data => {
      return CryptoActions.setTopThree({ payload: data });
    })
  ));

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) { }
}