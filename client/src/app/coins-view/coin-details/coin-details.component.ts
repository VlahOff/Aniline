import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, Subscription } from 'rxjs';

import { getLoadingStatus } from 'src/app/+store/appState.selector';
import { getCoinDetails, getCoinDetailsChart } from 'src/app/+store/crypto.selector';
import { ChartData, DetailedCoinDataResponse } from 'src/app/interfaces';
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
  coinDetailsChart$!: Observable<ChartData[] | null>;

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
    this.store.dispatch(CryptoActions.fetchChartData({ payload: { coinId: this.id, days: 1 } }));
    this.coinDetailsData$ = this.store.select(getCoinDetails);
    this.coinDetailsChart$ = this.store.select(getCoinDetailsChart);
  };

 

  ngOnDestroy(): void {
    this.idSub.unsubscribe();
    this.store.dispatch(CryptoActions.setCoinDetails({ payload: null }));
    this.store.dispatch(CryptoActions.setChartData({ payload: null }));
  }
}
