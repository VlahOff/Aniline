import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../+store/app.reducer';
import * as PortfolioActions from '../+store/portfolio.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  stateSub!: Subscription;
  state: any;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.stateSub = this.store.select('portfolio')
      .subscribe(state => this.state = state);
  }

  showAddModal() {
    this.store.dispatch(PortfolioActions.showAddModal());
  }

  hideModal(event: MouseEvent) {
    if ((event.target as HTMLElement).tagName === 'DIV' && (event.target as HTMLElement).className === 'modal') {
      this.store.dispatch(PortfolioActions.showAddModal());
    }
  }

  ngOnDestroy(): void {
    this.stateSub.unsubscribe();
  }
}
