import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, map, of, switchMap } from "rxjs";

import { AllCoins, TransactionDetailed } from "src/app/interfaces";
import { environment } from "src/environments/environment";
import * as fromApp from '../../+store/app.reducer';
import * as AppStateActions from '../../+store/appState.actions';
import * as PortfolioActions from './portfolio.actions';

const handleError = (error: string) => {
  let errorMessage: string;

  switch (error) {
    case 'NO_USER':
      errorMessage = 'You have to be signed in to use this!';
      break;
    case 'ENTER_COIN_ID':
      errorMessage = 'Coin name must be selected!';
      break;
    case 'COIN_PRICE_NOT_POSITIVE':
      errorMessage = 'The bought price must be a positive number!';
      break;
    case 'QUANTITY_LEAST_ONES':
      errorMessage = 'The quantity must be a positive number!';
      break;
    default:
      errorMessage = 'An unknown error has occurred!';
      break;
  }

  return of(AppStateActions.setError({ payload: errorMessage }));
};

@Injectable()
export class PortfolioEffects {
  // Fetches all the coins info for the add modal dropdown
  fetchAllCoinsList$ = createEffect(() => this.actions$.pipe(
    ofType(PortfolioActions.fetchAllCoinsList),
    switchMap(() => {
      this.store.dispatch(AppStateActions.loadStart());
      return this.http
        .get<AllCoins[]>(environment.cryptoApi + '/allCoins')
        .pipe(
          map(data => {
            this.store.dispatch(AppStateActions.loadEnd());
            return PortfolioActions.setAllCoinsList({ payload: data });
          }),
          catchError(err => {
            this.store.dispatch(AppStateActions.loadEnd());
            return handleError(err);
          })
        );
    })
  ));

  // Fetches all user transaction
  fetchTransactions$ = createEffect(() => this.actions$.pipe(
    ofType(PortfolioActions.fetchTransactions),
    switchMap(() => {
      this.store.dispatch(AppStateActions.loadStart());
      return this.http
        .get<TransactionDetailed[]>(environment.portfolioApi + '/getTransactions')
        .pipe(
          map(data => {
            this.store.dispatch(AppStateActions.loadEnd());
            return PortfolioActions.setTransactions({ payload: data });
          }),
          catchError(err => {
            this.store.dispatch(AppStateActions.loadEnd());
            return handleError(err);
          })
        );
    })
  ));

  // Adds the new transaction and receives the whole list with updated values
  addTransaction$ = createEffect(() => this.actions$.pipe(
    ofType(PortfolioActions.addTransaction),
    switchMap((state) => {
      this.store.dispatch(AppStateActions.loadStart());

      return this.http
        .post<TransactionDetailed[]>(
          environment.portfolioApi + '/addTransaction', { transaction: state.payload })
        .pipe(
          map((data) => {
            this.store.dispatch(AppStateActions.loadEnd());
            return PortfolioActions.setTransactions({ payload: data });
          }),
          catchError(err => {
            this.store.dispatch(AppStateActions.loadEnd());
            return handleError(err);
          })
        );
    })
  ));

  // Send the edited transaction and receives the whole list with updated value
  editTransaction$ = createEffect(() => this.actions$.pipe(
    ofType(PortfolioActions.sendUpdatedTransaction),
    switchMap((state) => {
      this.store.dispatch(AppStateActions.loadStart());
      return this.http
        .put<TransactionDetailed[]>(environment.portfolioApi + '/editTransaction', {
          transaction: state.payload.transaction,
          transactionId: state.payload.transactionId
        }).pipe(
          map(data => {
            this.store.dispatch(AppStateActions.loadEnd());
            return PortfolioActions.setTransactions({ payload: data });
          }),
          catchError(err => {
            this.store.dispatch(AppStateActions.loadEnd());
            return handleError(err);
          })
        );
    })
  ));

  // Sends the transaction ID to the backend to remove it
  removeTransaction$ = createEffect(() => this.actions$.pipe(
    ofType(PortfolioActions.removeTransaction),
    switchMap((state) => {
      let params = new HttpParams();
      params = params.append('transactionId', state.payload);
      return this.http
        .delete(environment.portfolioApi + '/removeTransaction', { params: params })
        .pipe(
          catchError(err => {
            return handleError(err);
          })
        );
    })
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) { }
}