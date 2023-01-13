import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getGlobalData } from 'src/app/+store/crypto.selector';

import { GlobalData } from 'src/app/interfaces';
import * as fromApp from '../../+store/app.reducer';
import * as CryptoActions from '../../+store/crypto.actions';

@Component({
  selector: 'app-global-data',
  templateUrl: './global-data.component.html',
  styleUrls: ['./global-data.component.css']
})
export class GlobalDataComponent implements OnInit {
  globalData$: Observable<GlobalData | null> = this.store.select(getGlobalData);

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(CryptoActions.fetchGlobalData());
  }
}
