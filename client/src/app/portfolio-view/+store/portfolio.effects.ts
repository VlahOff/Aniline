import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map, mapTo, of, switchMap } from "rxjs";

import { AllCoins, Transaction, TransactionDetailed } from "src/app/interfaces";
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

  fetchTransaction$ = createEffect(() => this.actions$.pipe(
    ofType(PortfolioActions.fetchTransaction),
    concatMap((state) => {
      let params = new HttpParams();
      params = params.append('transactionId', state.payload);
      return this.http.get<TransactionDetailed>(
        environment.portfolioApi + '/getTransaction', { params: params });
    }),
    map(data => PortfolioActions.setTransaction({ payload: data }))
  ));

  addTransaction = createEffect(() => this.actions$.pipe(
    ofType(PortfolioActions.addTransaction),
    switchMap((state) => {
      const data = state.payload;

      return this.http
        .post<Transaction>(environment.portfolioApi + '/addTransaction', { data });
    })
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) { }
}