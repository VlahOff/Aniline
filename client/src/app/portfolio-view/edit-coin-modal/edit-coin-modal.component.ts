import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '../../+store/app.reducer';
import * as PortfolioActions from '../+store/portfolio.actions';

@Component({
  selector: 'app-edit-coin-modal',
  templateUrl: './edit-coin-modal.component.html',
  styleUrls: ['./edit-coin-modal.component.css']
})
export class EditCoinModalComponent implements OnInit {

  editCoinForm!: FormGroup;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.editCoinForm = new FormGroup({
      'coinId': new FormControl(null, Validators.required),
      'coinPrice': new FormControl(null,
        [Validators.required, Validators.pattern(/^(?=.*[1-9])\d*(?:\.\d{0,})?$/)]
      ),
      'quantity': new FormControl(null,
        [Validators.required, Validators.pattern(/^(?=.*[1-9])\d*(?:\.\d{0,})?$/)]
      )
    });
  }

  onSubmit() {

  }

  hideModal(target: MouseEvent) {
    this.store.dispatch(PortfolioActions.showEditModal());
  }
}
