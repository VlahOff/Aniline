import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";

import { AllCoins } from "src/app/interfaces";
import { environment } from "src/environments/environment";
import * as PortfolioActions from './portfolio.actions';

@Injectable()
export class PortfolioEffects {

  fetchAllCoinsList$ = createEffect(() => this.actions$.pipe(
    ofType(PortfolioActions.fetchAllCoinsList),
    switchMap(() => {
      return this.http.get<AllCoins[]>(environment.cryptoApi + '/allCoins');
    }),
    map(data => PortfolioActions.setAllCoinsList({ payload: data }))
  ));

  fetchTransactionsIds$ = createEffect(() => this.actions$.pipe(
    ofType(PortfolioActions.fetchTransactionsIds),
    switchMap(() => {
      return this.http.get<string[]>(environment.portfolioApi + '/getTransactions');
    }),
    map(data => PortfolioActions.setTransactionsIds({ payload: data }))
  ));

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) { }
}