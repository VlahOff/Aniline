import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';

import { NewCoin } from 'src/app/interfaces';
import * as fromApp from '../../+store/app.reducer';
import * as CryptoActions from '../../+store/crypto.actions';

@Component({
  selector: 'app-new-coins',
  templateUrl: './new-coins.component.html',
  styleUrls: ['./new-coins.component.css']
})
export class NewCoinsComponent implements OnInit, OnDestroy {
  newCoins!: NewCoin[] | null;
  newCoinsSub!: Subscription;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.newCoinsSub = this.store.select('crypto')
      .pipe(
        map(state => state.newCoins)
      ).subscribe(data => {
        this.newCoins = data;
      });

    this.store.dispatch(CryptoActions.fetchNewCoins());
  }

  ngOnDestroy(): void {
    this.newCoinsSub.unsubscribe();
  }
}
