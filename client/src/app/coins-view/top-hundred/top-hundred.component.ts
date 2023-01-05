import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';

import { TopHundred } from 'src/app/interfaces';
import * as fromApp from '../../+store/app.reducer';
import * as CryptoActions from '../../+store/crypto.actions';

@Component({
  selector: 'app-top-hundred',
  templateUrl: './top-hundred.component.html',
  styleUrls: ['./top-hundred.component.css']
})
export class TopHundredComponent implements OnInit, OnDestroy {
  topHundred!: TopHundred[] | null;
  topHundredSub!: Subscription;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.topHundredSub = this.store.select('crypto')
      .pipe(
        map(state => state.topHundred)
      ).subscribe(res => this.topHundred = res);

    this.store.dispatch(CryptoActions.fetchTopHundred());
  }

  ngOnDestroy(): void {
    this.topHundredSub.unsubscribe();
  }
}
