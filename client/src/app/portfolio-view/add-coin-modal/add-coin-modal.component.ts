import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AllCoins } from 'src/app/interfaces';
import * as PortfolioActions from '../+store/portfolio.actions';
import { getAllCoins } from '../+store/portfolio.selector';
import * as fromApp from '../../+store/app.reducer';

@Component({
  selector: 'app-add-coin-modal',
  templateUrl: './add-coin-modal.component.html',
  styleUrls: ['./add-coin-modal.component.css']
})
export class AddCoinModalComponent implements OnInit {
  allCoins$: Observable<AllCoins[]> = this.store.select(getAllCoins);
  selectedCoinName!: string;

  addCoinForm!: FormGroup;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.addCoinForm = new FormGroup({
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
    this.store.dispatch(PortfolioActions.addTransaction({
      payload: this.addCoinForm.value
    }));
    this.addCoinForm.reset();
    this.store.dispatch(PortfolioActions.showAddModal());
  }

  filter(value: string) {
    this.store.dispatch(PortfolioActions.setCoinInputField({ payload: value }));
  }

  setCoin(coin: AllCoins) {
    this.selectedCoinName = coin.name;
    this.store.dispatch(PortfolioActions.setCoinInputField({ payload: '' }));
    this.addCoinForm.patchValue({ coinId: coin.id });
  }

  hideModal(target: MouseEvent) {
    this.store.dispatch(PortfolioActions.showAddModal());
  }
}
