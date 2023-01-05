import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';
import { User } from 'src/app/auth/user.model';

import * as fromApp from '../../+store/app.reducer';
import * as AuthActions from '../../auth/+store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub!: Subscription;

  user!: User | null;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.userSub = this.store.select('auth').pipe(
      map(authState => authState.user),
    ).subscribe(user => {
      this.user = user;
    });
  }

  onLogout() {
    this.store.dispatch(AuthActions.logout({ payload: this.user?.token || '' }));
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
