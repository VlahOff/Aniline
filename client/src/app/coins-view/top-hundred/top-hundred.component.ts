import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getTopHundred } from 'src/app/+store/crypto.selector';

import { TopHundred } from 'src/app/interfaces';
import * as fromApp from '../../+store/app.reducer';
import * as CryptoActions from '../../+store/crypto.actions';

@Component({
  selector: 'app-top-hundred',
  templateUrl: './top-hundred.component.html',
  styleUrls: ['./top-hundred.component.css']
})
export class TopHundredComponent implements OnInit {
  topHundred$: Observable<TopHundred[] | null> = this.store.select(getTopHundred);

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(CryptoActions.fetchTopHundred());
  }
}
