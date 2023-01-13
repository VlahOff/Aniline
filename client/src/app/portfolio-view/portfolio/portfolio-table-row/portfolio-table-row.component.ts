import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../+store/app.reducer';
import * as PortfolioActions from '../../+store/portfolio.actions';
import { getTransaction } from '../../+store/portfolio.selector';
import { Observable } from 'rxjs';
import { TransactionDetailed } from 'src/app/interfaces';

@Component({
  selector: 'app-portfolio-table-row',
  templateUrl: './portfolio-table-row.component.html',
  styleUrls: ['./portfolio-table-row.component.css']
})
export class PortfolioTableRowComponent implements OnInit, OnDestroy {
  @Input() transactionId!: string;
  transaction$!: Observable<TransactionDetailed | null | undefined>;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(PortfolioActions
      .fetchTransaction({ payload: this.transactionId }));
    this.transaction$ = this.store.select(getTransaction(this.transactionId));
  }

  removeTransaction() {
    this.store.dispatch(PortfolioActions.removeTransaction(
      {
        payload: this.transactionId
      }
    ));
  }

  ngOnDestroy(): void {

  }
}
