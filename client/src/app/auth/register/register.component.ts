import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getError, getLoadingStatus } from 'src/app/+store/appState.selector';
import * as AuthActions from '../+store/auth.actions';
import * as fromApp from '../../+store/app.reducer';
import * as AppStateActions from '../../+store/appState.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  error$: Observable<string> = this.store.select(getError);
  isLoading$: Observable<boolean> = this.store.select(getLoadingStatus);
  registerForm!: FormGroup;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'email': new FormControl(null,
        [
          Validators.required,
          Validators.email
        ]),
      'username': new FormControl(null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30)
        ]),
      'password': new FormControl(null,
        [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
        ]),
      'rePass': new FormControl(null,
        [
          Validators.required,
          this.doPasswordsMatch.bind(this)
        ])
    });
  }

  onSubmit() {
    this.store.dispatch(AuthActions.signupStart({
      payload: {
        email: this.registerForm.value.email,
        username: this.registerForm.value.username,
        password: this.registerForm.value.password
      }
    }));
  }

  doPasswordsMatch(control: FormControl): { [s: string]: boolean; } | null {
    if (control.value === this.registerForm?.get('password')?.value) {
      return null;
    }
    return { 'passwordDontMatch': true };
  }

  ngOnDestroy(): void {
    this.store.dispatch(AppStateActions.clearError());
  }
}
