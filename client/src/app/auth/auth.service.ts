import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';

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
export class AuthService {
  user = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient, private router: Router) { }

  test() {
    return this.http.get('http://localhost:3030/test/protected', { responseType: 'json' }).subscribe({ next: (res) => console.log(res) });
  }

  register(email: string, password: string) {
    return this.http.post<AuthResponse>(environment.authApi + '/register',
      {
        email: email,
        password: password
      }
    ).pipe(
      catchError(err => {
        return throwError(() => {
          this.handleErrors(err);
        });
      }),
      tap(resData => {
        this.createUser(resData.email, resData._id, resData.accessToken);
      })
    );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponse>(environment.authApi + '/login',
      {
        email: email,
        password: password
      }
    ).pipe(
      catchError(err => {
        return throwError(() => {
          this.handleErrors(err);
        });
      }),
      tap(resData => {
        this.createUser(resData.email, resData._id, resData.accessToken);
      })
    );
  }

  logout() {
    this.http.get(environment.authApi + '/logout').subscribe(
      (res) => {
        console.log(res);
      }
    );

    this.user.next(null);
    this.router.navigate(['/']);
    localStorage.removeItem('userData');
  }

  autoLogin() {
    const userData = localStorage.getItem('userData');
    if (!userData) {
      return;
    }

    const userObj = JSON.parse(userData);
    const loadedUser = new User(userObj.email, userObj._id, userObj.accessToken);
    this.user.next(loadedUser);
  }

  private createUser(email: string, _id: string, accessToken: string) {
    const user = new User(email, _id, accessToken);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleErrors(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error has occurred!';
    if (!error.error.message) {
      throw new Error(errorMessage);
    }

    switch (error.error.message) {
      case 'EMAIL_TAKEN':
        errorMessage = 'The email address is already in use by another account.';
        break;
      case 'INVALID_CREDENTIALS':
        errorMessage = 'Invalid email or password.';
        break;
    }

    throw new Error(errorMessage);
  }
}
