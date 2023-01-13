import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromApp from '../+store/app.reducer';
import * as CryptoActions from '../+store/crypto.actions';
import { getTopThree } from '../+store/crypto.selector';
import { TopHundred } from '../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  topThree: Observable<TopHundred[] | null> = this.store.select(getTopThree);

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(CryptoActions.fetchTopThree());
  }
}
