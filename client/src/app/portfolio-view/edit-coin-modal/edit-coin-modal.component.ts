import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '../../+store/app.reducer';
import * as PortfolioActions from '../+store/portfolio.actions';
import { Observable, Subscription } from 'rxjs';
import { getTransactionForEdit, getTransactionIdForEdit } from '../+store/portfolio.selector';
import { TransactionDetailed } from 'src/app/interfaces';

@Component({
  selector: 'app-edit-coin-modal',
  templateUrl: './edit-coin-modal.component.html',
  styleUrls: ['./edit-coin-modal.component.css']
})
export class EditCoinModalComponent implements OnInit, OnDestroy {
  transactionIdSub!: Subscription;
  transactionId!: string;
  transaction$: Observable<TransactionDetailed | null> = this.store.select(getTransactionForEdit);

  @ViewChild('editCoinForm') editCoinForm!: NgForm

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    // this.editCoinForm = new FormGroup({
    //   'coinId': new FormControl(null, Validators.required),
    //   'coinPrice': new FormControl(null,
    //     [Validators.required, Validators.pattern(/^(?=.*[1-9])\d*(?:\.\d{0,})?$/)]
    //   ),
    //   'quantity': new FormControl(null,
    //     [Validators.required, Validators.pattern(/^(?=.*[1-9])\d*(?:\.\d{0,})?$/)]
    //   )
    // });
    // this.editCoinForm.get('coinId')?.disable();

    this.transactionIdSub = this.store.select(getTransactionIdForEdit)
      .subscribe(data => this.transactionId = data);

    this.store.dispatch(PortfolioActions.fetchTransactionForEditing({ payload: this.transactionId }));
  }

  onSubmit() {
    console.log(this.transactionId);
    console.log(this.editCoinForm.value);
    
  }

  hideModal(target: MouseEvent) {
    this.store.dispatch(PortfolioActions.showEditModal());
  }

  ngOnDestroy(): void {
    this.transactionIdSub.unsubscribe();
  }
}
