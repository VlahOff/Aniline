import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as AuthActions from '../../+store/auth.actions';
import * as fromApp from '../../../+store/app.reducer';

@Component({
  selector: 'app-change-password-modal',
  templateUrl: './change-password-modal.component.html',
  styleUrls: ['./change-password-modal.component.css']
})
export class ChangePasswordModalComponent implements OnInit {
  changePasswordForm!: FormGroup;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.changePasswordForm = new FormGroup({
      'oldPassword': new FormControl(null, [Validators.required]),
      'newPassword': new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
      ]),
      'reNewPassword': new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),
        this.doPasswordsMatch.bind(this)
      ])
    });
  }

  onSubmit() {
    this.store.dispatch(AuthActions.sendChangePasswordData({
      payload: {
        oldPassword: this.changePasswordForm.get('oldPassword')?.value,
        newPassword: this.changePasswordForm.get('newPassword')?.value
      }
    }));
  }

  closeModal() {
    this.store.dispatch(AuthActions.toggleChangePasswordModal());
  }

  doPasswordsMatch(control: FormControl): { [s: string]: boolean; } | null {
    if (control.value === this.changePasswordForm?.get('newPassword')?.value) {
      return null;
    }
    return { 'passwordDontMatch': true };
  }
}