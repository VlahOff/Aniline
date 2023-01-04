import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, catchError, Subscription, tap, throwError } from 'rxjs';

import * as fromApp from '../+store/app.reducer';
import * as AuthActions from './+store/auth.actions';
import { environment } from '../../environments/environment';
import { User } from './user.model';

interface AuthResponse {
  _id: string,
  email: string,
  accessToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit, OnDestroy {
  private userSub!: Subscription;
  private user!: User | null;
  private tokenExpirationTimer: any;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.userSub = this.store.select('auth')
      .pipe(
        tap(authState => {
          this.user = authState.user;
        })
      ).subscribe();
  }

  setLogoutTimer(timeUntil: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.store.dispatch(AuthActions.logout({ payload: this.user?.token || '' }));
    }, timeUntil);
  }

  clearLogoutTimer() {
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
      this.tokenExpirationTimer = null;
    }
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
