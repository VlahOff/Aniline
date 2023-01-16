import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, switchMap, withLatestFrom } from "rxjs";

import { ConverterResponse, CryptoMap, CryptoMapRes, FiatMap, FiatMapRes } from "src/app/interfaces";
import { environment } from "src/environments/environment";
import * as fromApp from '../../+store/app.reducer';
import * as AppStateActions from '../../+store/appState.actions';
import * as ConverterActions from './converter.actions';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class ConverterEffects {
  fetchCryptoMap$ = createEffect(() => this.actions$.pipe(
    ofType(ConverterActions.fetchCryptoMap),
    switchMap(() => {
      this.store.dispatch(AppStateActions.loadStart());
      return this.http
        .get<CryptoMapRes[]>(environment.cryptoApi + '/cryptoMap', httpOptions);
    }),
    map(data => {
      const result: CryptoMap[] = [];
      data.forEach(v => {
        result.push(new CryptoMap(
          v.id,
          v.name,
          v.slug,
          v.symbol
        ));
      });
      return result;
    }),
    map(data => {
      this.store.dispatch(AppStateActions.loadEnd());
      return ConverterActions.setCryptoMap({ payload: data });
    })
  ));

  fetchFiatMap$ = createEffect(() => this.actions$.pipe(
    ofType(ConverterActions.fetchFiatMap),
    switchMap(() => {
      this.store.dispatch(AppStateActions.loadStart());
      return this.http
        .get<FiatMapRes[]>(environment.cryptoApi + '/fiatMap', httpOptions);
    }),
    map(data => {
      const result: FiatMap[] = [];
      data.forEach(v => {
        result.push(new FiatMap(
          v.id,
          v.name,
          v.sign,
          v.symbol
        ));
      });
      return result;
    }),
    map(data => {
      this.store.dispatch(AppStateActions.loadEnd());
      return ConverterActions.setFiatMap({ payload: data });
    })
  ));

  convertCurrency$ = createEffect(() => this.actions$.pipe(
    ofType(ConverterActions.convertCurrency),
    withLatestFrom(this.store.select('converter')),
    map(state => state[1]),
    switchMap((state) => {
      this.store.dispatch(AppStateActions.loadStart());
      let params = new HttpParams();
      if (state.from?.id && state.to?.id) {
        params = params.append('amount', state.amount);
        params = params.append('from', state.from.id);
        params = params.append('to', state.to.id);
      }

      return this.http
        .get<ConverterResponse>(environment.cryptoApi + '/convert', { params: params });
    }),
    map(res => {
      this.store.dispatch(AppStateActions.loadEnd());
      return ConverterActions.setConvertResult({ payload: res });
    })
  ));

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) { }
}