import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ConverterResponse, CryptoMap, FiatMap } from 'src/app/interfaces';
import * as ConverterActions from '../+store/converter.actions';
import { getCryptoMap, getFiatMap, getFrom, getResult, getTo } from '../+store/converter.selector';
import * as fromApp from '../../+store/app.reducer';

@Component({
  selector: 'app-crypto-converter',
  templateUrl: './crypto-converter.component.html',
  styleUrls: ['./crypto-converter.component.css']
})
export class CryptoConverterComponent implements OnInit {
  cryptoMap$: Observable<CryptoMap[] | null> = this.store.select(getCryptoMap);
  fiatMap$: Observable<FiatMap[] | null> = this.store.select(getFiatMap);
  result$: Observable<ConverterResponse | null> = this.store.select(getResult);
  from$: Observable<CryptoMap | null> = this.store.select(getFrom);
  to$: Observable<FiatMap | null> = this.store.select(getTo);

  converterForm!: FormGroup;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.converterForm = new FormGroup({
      'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'from': new FormControl(null, Validators.required),
      'to': new FormControl(null, Validators.required)
    });

    this.store.dispatch(ConverterActions.fetchCryptoMap());
    this.store.dispatch(ConverterActions.fetchFiatMap());
  }

  onSubmit() {
    this.store.dispatch(ConverterActions.convertCurrency());
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

  filterFrom(value: string) {
    this.store.dispatch(ConverterActions.setFromString({ payload: value }));
  }

  filterTo(value: string) {
    this.store.dispatch(ConverterActions.setToString({ payload: value }));
  }

  fromCrypto(crypto: CryptoMap) {
    this.store.dispatch(ConverterActions.setFromString({ payload: '' }));
    this.store.dispatch(ConverterActions.setFrom({ payload: crypto }));
    (<FormControl>this.converterForm.get('from')).setValue(`${crypto.name} "${crypto.symbol}"`);
  }

  toFiat(fiat: FiatMap) {
    this.store.dispatch(ConverterActions.setToString({ payload: '' }));
    this.store.dispatch(ConverterActions.setTo({ payload: fiat }));
    (<FormControl>this.converterForm.get('to')).setValue(`${fiat.name} "${fiat.sign}"`);
  }
}
