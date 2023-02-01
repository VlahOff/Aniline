import { Component, OnInit } from '@angular/core';
import * as fromApp from '../../../+store/app.reducer';
import * as AuthActions from '../../+store/auth.actions';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-user-modal',
  templateUrl: './delete-user-modal.component.html',
  styleUrls: ['./delete-user-modal.component.css']
})
export class DeleteUserModalComponent implements OnInit {
  deleteAccountForm!: FormGroup;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.deleteAccountForm = new FormGroup({
      'password': new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
      ])
    });
  }

  deleteAccount() {
    this.store.dispatch(AuthActions.sendDeleteAccountRequest(
      {
        payload: this.deleteAccountForm.value
      }
    ));
  }

  closeModal() {
    this.store.dispatch(AuthActions.toggleDeleteUserModal());
  }
}
