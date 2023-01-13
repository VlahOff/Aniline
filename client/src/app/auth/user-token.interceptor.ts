import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { exhaustMap, Observable, take } from 'rxjs';

import * as fromApp from '../+store/app.reducer';
import { getUser } from './+store/auth.selector';
import { User } from './user.model';

@Injectable()
export class UserTokenInterceptor implements HttpInterceptor {
  user$: Observable<User | null> = this.store.select(getUser);

  constructor(private store: Store<fromApp.AppState>) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.user$.pipe(
      take(1),
      exhaustMap(user => {
        if (!user) {
          return next.handle(request);
        }

        const modifiedRequest = request.clone({
          headers: request.headers.set('X-Authorization', user.token || '')
        });

        return next.handle(modifiedRequest);
      })
    );
  }
}