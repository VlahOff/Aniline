import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";

import { ConverterResponse, CryptoMap, CryptoMapRes, FiatMap, FiatMapRes } from "src/app/interfaces";
import { environment } from "src/environments/environment";
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
      return ConverterActions.setCryptoMap({ payload: data });
    })
  ));

  fetchFiatMap$ = createEffect(() => this.actions$.pipe(
    ofType(ConverterActions.fetchFiatMap),
    switchMap(() => {
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
      return ConverterActions.setFiatMap({ payload: data });
    })
  ));

  convertCurrency$ = createEffect(() => this.actions$.pipe(
    ofType(ConverterActions.convertCurrency),
    switchMap((data) => {
      let params = new HttpParams();
      if (data.payload.from?.id && data.payload.to?.id) {
        params = params.append('amount', data.payload.amount);
        params = params.append('from', data.payload.from.id);
        params = params.append('to', data.payload.to.id);
      }

      return this.http
        .get<ConverterResponse>(environment.cryptoApi + '/convert', { params: params });
    }),
    map(res => {
      return ConverterActions.setConvertResult({ payload: res });
    })
  ));

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) { }
}