import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getLoadingStatus } from 'src/app/+store/appState.selector';

import * as PortfolioActions from '../+store/portfolio.actions';
import { getAddModalStatus, getTotalAssetValue, getTransactionsIds } from '../+store/portfolio.selector';
import * as fromApp from '../../+store/app.reducer';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  isLoading$: Observable<boolean> = this.store.select(getLoadingStatus);
  totalAssetValue$: Observable<number> = this.store.select(getTotalAssetValue);
  transactionsIds$: Observable<string[]> = this.store.select(getTransactionsIds);
  addModalStatus$: Observable<boolean> = this.store.select(getAddModalStatus);

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(PortfolioActions.fetchAllCoinsList());
    this.store.dispatch(PortfolioActions.fetchTransactionsIds());
  }

  showAddModal() {
    this.store.dispatch(PortfolioActions.showAddModal());
  }

  hideModal(event: MouseEvent) {
    if ((event.target as HTMLElement).tagName === 'DIV' &&
      (event.target as HTMLElement).className === 'modal') {
      this.store.dispatch(PortfolioActions.showAddModal());
    }
  }
}
