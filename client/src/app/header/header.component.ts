import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUser } from 'src/app/auth/+store/auth.selector';

import { User } from 'src/app/auth/user.model';
import * as fromApp from '../+store/app.reducer';
import * as AuthActions from '../auth/+store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user: Observable<User | null> = this.store.select(getUser);

  constructor(private store: Store<fromApp.AppState>) { }

  onLogout() {
    this.store.dispatch(AuthActions.logoutStart());
  }
}