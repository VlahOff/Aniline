import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";

import { CryptoMap, CryptoMapRes, FiatMap, FiatMapRes } from "src/app/interfaces";
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

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}
}