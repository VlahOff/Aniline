import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { Transaction, TransactionDetailed } from 'src/app/interfaces';
import * as PortfolioActions from '../+store/portfolio.actions';
import { getTransactionToEdit } from '../+store/portfolio.selector';
import * as fromApp from '../../+store/app.reducer';

@Component({
  selector: 'app-edit-coin-modal',
  templateUrl: './edit-coin-modal.component.html',
  styleUrls: ['./edit-coin-modal.component.css']
})
export class EditCoinModalComponent implements OnInit, OnDestroy {
  editCoinForm!: FormGroup;
  transactionSub!: Subscription;
  transaction$: Observable<TransactionDetailed | undefined> = this.store.select(getTransactionToEdit);
  transaction!: TransactionDetailed;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.editCoinForm = new FormGroup({
      'coinId': new FormControl(null, Validators.required),
      'coinPrice': new FormControl(
        null,
        [Validators.required, Validators.pattern(/^(?=.*[1-9])\d*(?:\.\d{0,})?$/)]
      ),
      'quantity': new FormControl(
        null,
        [Validators.required, Validators.pattern(/^(?=.*[1-9])\d*(?:\.\d{0,})?$/)]
      )
    });
    this.editCoinForm.get('coinId')?.disable();

    this.transactionSub = this.transaction$
      .subscribe(data => {
        if (data) {
          this.transaction = data;
          this.editCoinForm.setValue({
            'coinId': data.name,
            'coinPrice': data.boughtPrice,
            'quantity': data.quantity
          });
        }
      });
  }

  onSubmit() {
    const transaction = new Transaction(
      this.transaction.coinId,
      this.editCoinForm.value.coinPrice,
      this.editCoinForm.value.quantity
    );

    this.store.dispatch(PortfolioActions.sendUpdatedTransaction({
      payload: {
        transaction: transaction,
        transactionId: this.transaction.transactionId
      }
    }));
    this.store.dispatch(PortfolioActions.toggleEditModal());
    this.store.dispatch(PortfolioActions.clearTransactionIdForEdit());
  }

  hideModal(target: MouseEvent) {
    this.store.dispatch(PortfolioActions.toggleEditModal());
    this.store.dispatch(PortfolioActions.clearTransactionIdForEdit());
  }

  ngOnDestroy(): void {
    this.transactionSub.unsubscribe();
  }
}
