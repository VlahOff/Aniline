import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromApp from './+store/app.reducer';
import * as AppStateActions from './+store/appState.actions';
import { getError, getLoadingStatus } from './+store/appState.selector';
import * as AuthActions from './auth/+store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentChecked {
  isLoading$: Observable<boolean> = this.store.select(getLoadingStatus);
  error$: Observable<string> = this.store.select(getError);

  constructor(
    private cd: ChangeDetectorRef,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(AuthActions.autoLogin());
  }

  clearError() {
    this.store.dispatch(AppStateActions.clearError());
  }

  ngAfterContentChecked(): void {
    this.cd.detectChanges();
  }
}
