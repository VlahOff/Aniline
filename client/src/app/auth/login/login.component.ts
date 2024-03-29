import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as AuthActions from '../+store/auth.actions';
import * as fromApp from '../../+store/app.reducer';
import * as AppStateActions from '../../+store/appState.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  passField: boolean = true;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null,
        [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
        ])
    });
  }

  onSubmit() {
    this.store.dispatch(AuthActions.loginStart({
      payload: {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
    }));
  }

  togglePassField() {
    this.passField = !this.passField;
  }

  ngOnDestroy(): void {
    this.store.dispatch(AppStateActions.clearError());
  }
}
