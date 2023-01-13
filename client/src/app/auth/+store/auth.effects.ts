import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
import { User } from '../user.model';
import * as AuthActions from './auth.actions';

interface AuthResponse {
  userId: string,
  email: string,
  username: string,
  accessToken: string,
  expiriesIn: string;
}

const handleAuthentication = (userId: string, email: string, username: string, accessToken: string, expiriesIn: string) => {
  const expirationTime = new Date();
  expirationTime.setMilliseconds(new Date().getMilliseconds() + Number(expiriesIn))

  const user = new User(email, username, userId, accessToken, expirationTime);
  localStorage.setItem('userData', JSON.stringify(user));

  return AuthActions.authenticateSuccess({
    payload: {
      email: email,
      userId: userId,
      username: username,
      accessToken: accessToken,
      expiresIn: expirationTime,
      redirect: true
    }
  });
};

const handleError = (error: string) => {
  let errorMessage: string;

  switch (error) {
    case 'INVALID_EMAIL':
      errorMessage = 'This is not a valid email address.';
      break;
    case 'USERNAME_INVALID_LENGTH':
      errorMessage = 'Username must be between 3 and 30 characters.';
      break;
    case 'EMAIL_TAKEN':
      errorMessage = 'The email address is already in use by another account.';
      break;
    case 'INVALID_CREDENTIALS':
      errorMessage = 'Invalid email or password.';
      break;
    default:
      errorMessage = 'An unknown error has occurred!';
      break;
  }

  return of(AuthActions.authenticateFail({ payload: errorMessage }));
};

@Injectable()
export class AuthEffects {
  authSignup$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.signupStart),
    switchMap((authData) => {
      return this.http.post<AuthResponse>(environment.authApi + '/register',
        {
          email: authData.payload.email,
          username: authData.payload.username,
          password: authData.payload.password
        }
      ).pipe(
        tap((resData: AuthResponse) => {
          this.authService.setLogoutTimer(Number(resData.expiriesIn));
        }),
        map((resData: AuthResponse) => {
          return handleAuthentication(resData.userId, resData.email, resData.username, resData.accessToken, resData.expiriesIn);
        }),
        catchError(err => {
          return handleError(err);
        })
      );
    })
  ));

  authLogin$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.loginStart),
    switchMap((authData) => {
      return this.http.post<AuthResponse>(environment.authApi + '/login',
        {
          email: authData.payload.email,
          password: authData.payload.password
        }
      ).pipe(
        tap(resData => {
          this.authService.setLogoutTimer(Number(resData.expiriesIn));
        }),
        map(resData => {
          return handleAuthentication(resData.userId, resData.email, resData.username, resData.accessToken, resData.expiriesIn);
        }),
        catchError(err => {
          return handleError(err);
        })
      );
    })
  ));

  autoLogin$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.autoLogin),
    map(() => {
      const userData = localStorage.getItem('userData');
      if (!userData) {
        return AuthActions.dummy();
      }

      const userObj = JSON.parse(userData);
      const loadedUser = new User(
        userObj.email,
        userObj.username,
        userObj.userId,
        userObj.accessToken,
        new Date(userObj.expiresIn)
      );

      if (loadedUser.token) {
        const timeLeft = new Date(userObj.expiresIn).getTime() - new Date().getTime();
        this.authService.setLogoutTimer(timeLeft);

        return AuthActions.authenticateSuccess({
          payload: {
            userId: loadedUser.userId,
            email: loadedUser.email,
            username: loadedUser.username,
            expiresIn: new Date(userObj.expiresIn),
            accessToken: loadedUser.token,
            redirect: false
          }
        });
      }

      return AuthActions.dummy();
    })
  ));

  authRedirect$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.authenticateSuccess),
    tap((authSuccess) => {
      if (authSuccess.payload.redirect) {
        this.router.navigate(['/']);
      }
    })
  ), { dispatch: false });

  authLogout$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logout),
    switchMap((r) => {
      let httpParams = new HttpParams();
      httpParams = httpParams.append('token', r.payload);

      return this.http.get(environment.authApi + '/logout', { params: httpParams });
    }),
    tap(() => {
      this.authService.clearLogoutTimer();
      localStorage.removeItem('userData');
      this.router.navigate(['/home']);
    })
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) { }
}