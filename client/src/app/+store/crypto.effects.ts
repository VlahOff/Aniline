import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs";

import { environment } from "src/environments/environment";
import { GlobalDataResponse } from "../interfaces";
import * as CryptoActions from './crypto.actions';

@Injectable()
export class CryptoEffects {
  getGlobalData$ = createEffect(() => this.actions$.pipe(
    ofType(CryptoActions.getGlobalData),
    switchMap(() => {
      return this.http.get<GlobalDataResponse>(environment.cryptoApi + '/getGlobalData')
        .pipe(
          map(resData => {
            return CryptoActions.getGlobalData({
              payload: {
                total_market_cap: resData.total_market_cap,
                btc_dominance: resData.btc_dominance,
                market_cap_change_percentage_24h_usd: resData.market_cap_change_percentage_24h_usd,
                number_of_coins:resData.number_of_coins,
                trading_volume:resData.trading_volume
              }
            });
          })
        );
    })
  ));

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) { }
}