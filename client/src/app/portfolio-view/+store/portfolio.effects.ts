import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, of, switchMap, tap } from "rxjs";
import { Store } from "@ngrx/store";

import { AllCoins, TransactionDetailed } from "src/app/interfaces";
import { environment } from "src/environments/environment";
import * as fromApp from '../../+store/app.reducer';
import * as AppStateActions from '../../+store/appState.actions';
import * as PortfolioActions from './portfolio.actions';
import { getAllTransactionsIdsArray } from "./portfolio.selector";

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

  // Fetches all the IDs of the user transaction
  fetchTransactionsIds$ = createEffect(() => this.actions$.pipe(
    ofType(PortfolioActions.fetchTransactionsIds),
    switchMap(() => {
      // this.store.dispatch(AppStateActions.loadStart());
      return this.http
        .get<string[]>(environment.portfolioApi + '/getTransactions')
        .pipe(
          tap(data => console.log(data)),
          map(data => {
            // this.store.dispatch(AppStateActions.loadEnd());
            return PortfolioActions.setTransactionsIds({ payload: data });
          }),
          catchError(err => {
            this.store.dispatch(AppStateActions.loadEnd());
            return handleError(err);
          })
        );
    })
  ));

  // Fetches the full transaction data
  fetchTransaction$ = createEffect(() => this.actions$.pipe(
    ofType(PortfolioActions.fetchTransaction),
    concatMap((state) => {
      this.store.dispatch(AppStateActions.loadStart());
      let params = new HttpParams();
      params = params.append('transactionId', state.payload);

      return this.http
        .get<TransactionDetailed>(
          environment.portfolioApi + '/getTransaction', { params: params })
        .pipe(
          map(data => {
            this.store.dispatch(AppStateActions.loadEnd());
            return PortfolioActions.setTransaction({ payload: data });
          }),
          catchError(err => {
            this.store.dispatch(AppStateActions.loadEnd());
            return handleError(err);
          })
        );
    })
  ));

  fetchAllTransactionsDetailed$ = createEffect(() => this.actions$.pipe(
    ofType(PortfolioActions.fetchAllTransactionsDetailed),
    switchMap(() => {
      return this.store.select(getAllTransactionsIdsArray);
    }),
    tap(data => console.log(data))
    // concatMap((data: string[]) => {
    //   data.forEach(v => {
    //     let params = new HttpParams();
    //     params = params.append('transactionId', v);

    //     return this.http
    //       .get<TransactionDetailed>(
    //         environment.portfolioApi + '/getTransaction', { params: params })
    //       .pipe(
    //         map(data => {
    //           // this.store.dispatch(AppStateActions.loadEnd());
    //           return PortfolioActions.setTransaction({ payload: data });
    //         }),
    //         catchError(err => {
    //           // this.store.dispatch(AppStateActions.loadEnd());
    //           return handleError(err);
    //         })
    //       );
    //   });

    //   // return PortfolioActions.setAllTransactionsDetailed;
    // })
  ),{dispatch:false});

  fetchTransactionForEdit$ = createEffect(() => this.actions$.pipe(
    ofType(PortfolioActions.fetchTransactionForEditing),
    switchMap((state) => {
      this.store.dispatch(AppStateActions.loadStart());
      let params = new HttpParams();
      params = params.append('transactionId', state.payload);

      return this.http
        .get<TransactionDetailed>(
          environment.portfolioApi + '/getTransaction', { params: params })
        .pipe(
          map(data => {
            this.store.dispatch(AppStateActions.loadEnd());
            return PortfolioActions.setTransactionForEditing({ payload: data });
          }),
          catchError(err => {
            this.store.dispatch(AppStateActions.loadEnd());
            return handleError(err);
          })
        );
    })
  ));

  //
  addTransaction$ = createEffect(() => this.actions$.pipe(
    ofType(PortfolioActions.addTransaction),
    switchMap((state) => {
      const data = state.payload;

      return this.http
        .post<TransactionDetailed>(
          environment.portfolioApi + '/addTransaction', { data })
        .pipe(
          map((data) => {
            return PortfolioActions.setTransaction({ payload: data });
          }),
          map((data) => {
            return PortfolioActions.addTransactionId({ payload: data.payload.transactionId });
          }),
          catchError(err => {
            this.store.dispatch(AppStateActions.loadEnd());
            return handleError(err);
          })
        );
    })
  ));

  editTransaction$ = createEffect(() => this.actions$.pipe(
    ofType(PortfolioActions.putEditedTransaction),
    switchMap((state) => {
      this.store.dispatch(AppStateActions.loadStart());
      return this.http
        .put<TransactionDetailed>(environment.portfolioApi + '/editTransaction',
          {
            transaction: state.payload.transaction,
            transactionId: state.payload.transactionId
          })
        .pipe(
          map(data => {
            this.store.dispatch(AppStateActions.loadEnd());
            return PortfolioActions.updateEditedTransaction({ payload: data });
          }),
          catchError(err => {
            this.store.dispatch(AppStateActions.loadEnd());
            return handleError(err);
          })
        );
    })
  ));

  removeTransaction$ = createEffect(() => this.actions$.pipe(
    ofType(PortfolioActions.removeTransaction),
    switchMap((state) => {
      let params = new HttpParams();
      params = params.append('transactionId', state.payload);
      return this.http
        .delete(environment.portfolioApi + '/removeTransaction', { params: params })
        .pipe(
          catchError(err => {
            this.store.dispatch(AppStateActions.loadEnd());
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