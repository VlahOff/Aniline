import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../+store/app.reducer';
import * as PortfolioActions from '../../+store/portfolio.actions';

@Component({
  selector: 'app-portfolio-table-row',
  templateUrl: './portfolio-table-row.component.html',
  styleUrls: ['./portfolio-table-row.component.css']
})
export class PortfolioTableRowComponent implements OnInit, OnDestroy {
  @Input() transactionId!: string;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    console.log(this.transactionId);
    this.store.dispatch(PortfolioActions.fetchTransaction({ payload: this.transactionId }));
  }

  ngOnDestroy(): void {

  }
}
