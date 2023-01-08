import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';

import * as fromApp from '../+store/app.reducer';
import * as CryptoActions from '../+store/crypto.actions';
import { TopHundred } from '../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  topThreeCards!: TopHundred[] | null;
  topThreeSub!: Subscription;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.topThreeSub = this.store.select('crypto').pipe(
      map(state => state.topThree)
    ).subscribe(data => {
      this.topThreeCards = data;
    });

    this.store.dispatch(CryptoActions.fetchTopThree());
  }

  ngOnDestroy(): void {
    this.topThreeSub.unsubscribe();
  }
}
