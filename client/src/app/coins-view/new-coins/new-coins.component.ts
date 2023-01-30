import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getNewCoins } from 'src/app/+store/crypto.selector';
import { CoinsViewResponse } from 'src/app/interfaces';
import * as fromApp from '../../+store/app.reducer';
import * as CryptoActions from '../../+store/crypto.actions';

@Component({
  selector: 'app-new-coins',
  templateUrl: './new-coins.component.html',
  styleUrls: ['./new-coins.component.css']
})
export class NewCoinsComponent implements OnInit {
  newCoins$: Observable<CoinsViewResponse[] | null> = this.store.select(getNewCoins);

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(CryptoActions.fetchNewCoins());
  }
}
