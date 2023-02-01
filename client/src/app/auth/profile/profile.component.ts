import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as AuthActions from '../+store/auth.actions';
import {
  getChangePasswordModal,
  getChangeUsernameModal,
  getDeleteUserModal,
  getUser
} from '../+store/auth.selector';
import * as fromApp from '../../+store/app.reducer';
import { User } from '../user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  changeUsernameModal$: Observable<boolean> = this.store.select(getChangeUsernameModal);
  changePasswordModal$: Observable<boolean> = this.store.select(getChangePasswordModal);
  deleteUserModal$: Observable<boolean> = this.store.select(getDeleteUserModal);
  user$: Observable<User | null> = this.store.select(getUser);

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void { }

  changeUsernameModal() {
    this.store.dispatch(AuthActions.toggleChangeUsernameModal());
  }

  changePasswordModal() {
    this.store.dispatch(AuthActions.toggleChangePasswordModal());
  }

  deleteUserModal() {
    this.store.dispatch(AuthActions.toggleDeleteUserModal());
  }

  hideModals(event: MouseEvent) {
    if (
      ((event.target as HTMLElement).tagName === 'DIV' &&
        (event.target as HTMLElement).className === 'modal-container') ||
      ((event.target as HTMLElement).tagName === 'APP-CHANGE-PASSWORD-MODAL' &&
        (event.target as HTMLElement).className === 'modal') ||
      ((event.target as HTMLElement).tagName === 'APP-CHANGE-USERNAME-MODAL' &&
        (event.target as HTMLElement).className === 'modal') ||
      ((event.target as HTMLElement).tagName === 'APP-DELETE-USER-MODAL' &&
        (event.target as HTMLElement).className === 'modal')
    ) {
      this.store.dispatch(AuthActions.closeAllModals());
    }
  }
}