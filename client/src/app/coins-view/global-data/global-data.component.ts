import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';

import { GlobalData } from 'src/app/interfaces';
import * as fromApp from '../../+store/app.reducer';
import * as CryptoActions from '../../+store/crypto.actions';

@Component({
  selector: 'app-global-data',
  templateUrl: './global-data.component.html',
  styleUrls: ['./global-data.component.css']
})
export class GlobalDataComponent implements OnInit, OnDestroy {
  globalData!: GlobalData | null;
  dataSub!: Subscription;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.dataSub = this.store.select('crypto')
      .pipe(
        map(state => {
          return state.globalData;
        })
      ).subscribe(res => {
        this.globalData = res;
      });

    this.store.dispatch(CryptoActions.fetchGlobalData());
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
  }
}
