import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
import * as fromApp from '../../+store/app.reducer';
import * as CryptoActions from '../../+store/crypto.actions';
import { Store } from '@ngrx/store';
import { DetailedCoinDataResponse } from 'src/app/interfaces';
import { getCoinDetails } from 'src/app/+store/crypto.selector';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css']
})


export class CoinDetailsComponent implements OnInit, OnDestroy {
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

    this.coinDetailsData$ = this.store.select(getCoinDetails);
    this.store.dispatch(CryptoActions.fetchCoinDetails({ payload: this.id }));
  };

  ngOnDestroy(): void {
    this.idSub.unsubscribe();
    this.store.dispatch(CryptoActions.setCoinDetails({ payload: null }));
  }
}
