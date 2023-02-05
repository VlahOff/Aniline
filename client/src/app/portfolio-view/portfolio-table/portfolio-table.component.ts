import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { TransactionDetailed } from 'src/app/interfaces';
import * as PortfolioActions from '../+store/portfolio.actions';
import { getTransactions } from '../+store/portfolio.selector';
import * as fromApp from '../../+store/app.reducer';

@Component({
  selector: 'app-portfolio-table',
  templateUrl: './portfolio-table.component.html',
  styleUrls: ['./portfolio-table.component.css']
})
export class PortfolioTableComponent {
  transactions$: Observable<TransactionDetailed[]> = this.store.select(getTransactions);

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  editTransaction(transactionId: string) {
    this.store.dispatch(PortfolioActions.setTransactionIdToEdit({ payload: transactionId }));
    this.store.dispatch(PortfolioActions.toggleEditModal());
  }

  removeTransaction(transactionId: string) {
    this.store.dispatch(PortfolioActions.removeTransaction({ payload: transactionId }));
  }
}
