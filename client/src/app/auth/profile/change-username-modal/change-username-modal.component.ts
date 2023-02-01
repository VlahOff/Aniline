import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as AuthActions from '../../+store/auth.actions';
import { getUser } from '../../+store/auth.selector';
import * as fromApp from '../../../+store/app.reducer';
import { User } from '../../user.model';

@Component({
  selector: 'app-change-username-modal',
  templateUrl: './change-username-modal.component.html',
  styleUrls: ['./change-username-modal.component.css']
})
export class ChangeUsernameModalComponent implements OnInit {
  user$: Observable<User | null> = this.store.select(getUser);
  changeUsernameForm!: FormGroup;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.changeUsernameForm = new FormGroup({
      'newUsername': new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]),
      'password': new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
      ])
    });
  }

  onSubmit() {
    this.store.dispatch(AuthActions.sendChangeUsernameData({
      payload: this.changeUsernameForm.value
    }));
  }

  closeModal() {
    this.store.dispatch(AuthActions.toggleChangeUsernameModal());
  }
}
