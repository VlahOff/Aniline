import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map, switchMap } from "rxjs";

import { AllCoins, TransactionDetailed } from "src/app/interfaces";
import { environment } from "src/environments/environment";
import * as PortfolioActions from './portfolio.actions';
import * as fromApp from '../../+store/app.reducer';
import * as AppStateActions from '../../+store/appState.actions';
import { Store } from "@ngrx/store";

@Injectable()
export class PortfolioEffects {

  // Fetches all the coins info for the add modal dropdown
  fetchAllCoinsList$ = createEffect(() => this.actions$.pipe(
    ofType(PortfolioActions.fetchAllCoinsList),
    switchMap(() => {
      this.store.dispatch(AppStateActions.loadStart());
      return this.http.get<AllCoins[]>(environment.cryptoApi + '/allCoins');
    }),
    map(data => {
      this.store.dispatch(AppStateActions.loadEnd());
      return PortfolioActions.setAllCoinsList({ payload: data });
    })
  ));

  // Fetches all the IDs of the user transaction
  fetchTransactionsIds$ = createEffect(() => this.actions$.pipe(
    ofType(PortfolioActions.fetchTransactionsIds),
    switchMap(() => {
      // this.store.dispatch(AppStateActions.loadStart());
      return this.http.get<string[]>(environment.portfolioApi + '/getTransactions');
    }),
    map(data => {
      // this.store.dispatch(AppStateActions.loadEnd());
      return PortfolioActions.setTransactionsIds({ payload: data });
    })
  ));

  // Fetches the full transaction data
  fetchTransaction$ = createEffect(() => this.actions$.pipe(
    ofType(PortfolioActions.fetchTransaction),
    concatMap((state) => {
      this.store.dispatch(AppStateActions.loadStart());
      let params = new HttpParams();
      params = params.append('transactionId', state.payload);

      return this.http.get<TransactionDetailed>(
        environment.portfolioApi + '/getTransaction', { params: params });
    }),
    map(data => {
      this.store.dispatch(AppStateActions.loadEnd());
      return PortfolioActions.setTransaction({ payload: data });
    })
  ));

  //
  addTransaction = createEffect(() => this.actions$.pipe(
    ofType(PortfolioActions.addTransaction),
    switchMap((state) => {
      const data = state.payload;

      return this.http
        .post<TransactionDetailed>(environment.portfolioApi + '/addTransaction', { data });
    }),
    map((data) => {
      return PortfolioActions.setTransaction({ payload: data });
    }),
    map((data) => {
      return PortfolioActions.addTransactionId({ payload: data.payload.transactionId });
    })
  ));

  removeTransaction = createEffect(() => this.actions$.pipe(
    ofType(PortfolioActions.removeTransaction),
    switchMap((state) => {
      let params = new HttpParams();
      params = params.append('transactionId', state.payload);
      return this.http
        .delete(environment.portfolioApi + '/removeTransaction', { params: params });
    })
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) { }
}