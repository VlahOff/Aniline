import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, Subscription } from 'rxjs';
import { getLoadingStatus } from 'src/app/+store/appState.selector';

import { getCoinDetails } from 'src/app/+store/crypto.selector';
import { DetailedCoinDataResponse } from 'src/app/interfaces';
import * as fromApp from '../../+store/app.reducer';
import * as CryptoActions from '../../+store/crypto.actions';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css']
})


export class CoinDetailsComponent implements OnInit, OnDestroy {
  isLoading$: Observable<boolean> = this.store.select(getLoadingStatus);
  coinDetailsData$!: Observable<DetailedCoinDataResponse | null>;
  idSub!: Subscription;
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.idSub = this.route.params
      .pipe(
        map(data => this.id = data['id'])
      )
      .subscribe();

    this.store.dispatch(CryptoActions.fetchCoinDetails({ payload: this.id }));
    this.coinDetailsData$ = this.store.select(getCoinDetails);
  };

  ngOnDestroy(): void {
    this.idSub.unsubscribe();
    this.store.dispatch(CryptoActions.setCoinDetails({ payload: null }));
  }
}
