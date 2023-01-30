import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, map, of, switchMap, withLatestFrom } from "rxjs";

import { ConverterResponse, CryptoMap, FiatMap } from "src/app/interfaces";
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
        .get<CryptoMap[]>(environment.cryptoApi + '/cryptoMap', httpOptions)
        .pipe(
          map(data => {
            this.store.dispatch(AppStateActions.loadEnd());
            return ConverterActions.setCryptoMap({ payload: data });
          }),
          catchError(err => {
            this.store.dispatch(AppStateActions.loadEnd());
            return of(AppStateActions.setError({ payload: err?.error?.message }));
          })
        );
    })
  ));

  fetchFiatMap$ = createEffect(() => this.actions$.pipe(
    ofType(ConverterActions.fetchFiatMap),
    switchMap(() => {
      this.store.dispatch(AppStateActions.loadStart());
      return this.http
        .get<FiatMap[]>(environment.cryptoApi + '/fiatMap', httpOptions)
        .pipe(
          map(data => {
            this.store.dispatch(AppStateActions.loadEnd());
            return ConverterActions.setFiatMap({ payload: data });
          }),
          catchError(err => {
            this.store.dispatch(AppStateActions.loadEnd());
            return of(AppStateActions.setError({ payload: err?.error?.message }));
          })
        );
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
        .get<ConverterResponse>(environment.cryptoApi + '/convert', { params: params })
        .pipe(
          map(res => {
            this.store.dispatch(AppStateActions.loadEnd());
            return ConverterActions.setConvertResult({ payload: res });
          }),
          catchError(err => {
            this.store.dispatch(AppStateActions.loadEnd());
            return of(AppStateActions.setError({ payload: err?.error?.message }));
          })
        );
    })
  ));

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) { }
}