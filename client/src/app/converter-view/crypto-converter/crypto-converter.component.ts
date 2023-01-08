import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';
import { ConverterResponse, CryptoMap, CryptoMapRes, FiatMap, FiatMapRes } from 'src/app/interfaces';
import { CryptoService } from 'src/app/shared/services/cryptoApi.service';
import * as fromApp from '../../+store/app.reducer';
import * as fromConverter from '../+store/converter.reducer';
import * as ConverterActions from '../+store/converter.actions';

@Component({
  selector: 'app-crypto-converter',
  templateUrl: './crypto-converter.component.html',
  styleUrls: ['./crypto-converter.component.css']
})
export class CryptoConverterComponent implements OnInit, OnDestroy {
  convertSub!: Subscription;
  converterForm!: FormGroup;
  state!: fromConverter.State;
  result!: ConverterResponse | null;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.converterForm = new FormGroup({
      'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'from': new FormControl(null, Validators.required),
      'to': new FormControl(null, Validators.required)
    });

    this.convertSub = this.store.select('converter').pipe(
      map(state => {
        this.state = state;
        this.result = state.result;
      })
    ).subscribe();

    this.store.dispatch(ConverterActions.fetchCryptoMap());
    this.store.dispatch(ConverterActions.fetchFiatMap());
  }

  onSubmit() {
    this.store.dispatch(
      ConverterActions.convertCurrency({
        payload: {
          amount: this.state.amount,
          from: this.state.from,
          to: this.state.to
        }
      }));
    this.converterForm.reset();
  }

  setAmount() {
    this.store.dispatch(
      ConverterActions.setAmount({ payload: this.converterForm.value.amount })
    );
    this.store.dispatch(
      ConverterActions.setConvertResult({ payload: null })
    );
  }

  fromCrypto(crypto: CryptoMap) {
    this.store.dispatch(ConverterActions.setFrom({ payload: crypto }));
    (<FormControl>this.converterForm.get('from')).setValue(`${crypto.name} "${crypto.symbol}"`);
  }

  toFiat(fiat: FiatMap) {
    this.store.dispatch(ConverterActions.setTo({ payload: fiat }));
    (<FormControl>this.converterForm.get('to')).setValue(`${fiat.name} "${fiat.sign}"`);
  }

  ngOnDestroy(): void {
    this.convertSub.unsubscribe();
  }
}
