import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { exhaustMap, map, Observable, take } from 'rxjs';

import * as fromApp from '../+store/app.reducer';

@Injectable()
export class UserTokenInterceptor implements HttpInterceptor {

  constructor(private store: Store<fromApp.AppState>) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.store.select('auth').pipe(
      take(1),
      map(authState => {
        return authState.user;
      }),
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