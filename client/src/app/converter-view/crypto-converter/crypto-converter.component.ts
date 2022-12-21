import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ConverterResponse, CryptoMap, FiatMap } from 'src/app/interfaces';
import { CryptoService } from 'src/app/shared/services/cryptoApi.service';

@Component({
  selector: 'app-crypto-converter',
  templateUrl: './crypto-converter.component.html',
  styleUrls: ['./crypto-converter.component.css']
})
export class CryptoConverterComponent implements OnInit, OnDestroy {
  fiatMap!: FiatMap[];
  cryptoMap!: CryptoMap[];

  convertSub!: Subscription;
  fiatMapSub!: Subscription;
  cryptoMapSub!: Subscription;

  fiatMapValue!: FiatMap | undefined;
  fromId!: number;
  toId!: number;
  result!: ConverterResponse;

  converterForm!: FormGroup;

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.converterForm = new FormGroup({
      'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'from': new FormControl(null, Validators.required),
      'to': new FormControl(null, Validators.required)
    });

    this.fiatMapSub = this.cryptoService.fiatMap()
      .subscribe({
        next: (res) => {
          this.fiatMap = res;
        }
      });

    this.cryptoMapSub = this.cryptoService.cryptoMap()
      .subscribe({
        next: (res) => {
          this.cryptoMap = res;
        }
      });
  }

  onSubmit() {
    this.convertSub = this.cryptoService.convert(this.converterForm.value.amount, this.fromId, this.toId)
      .subscribe({
        next: (res) => {
          this.result = res;

          this.fiatMapValue = this.fiatMap.find(e => {
            return e.id === this.toId;
          });
        }
      });
    this.converterForm.reset();
  }

  fromCrypto(crypto: CryptoMap) {
    this.fromId = crypto.id;
    (<FormControl>this.converterForm.get('from')).setValue(`${crypto.name} "${crypto.symbol}"`);
  }

  toFiat(fiat: FiatMap) {
    this.toId = fiat.id;
    (<FormControl>this.converterForm.get('to')).setValue(`${fiat.name} "${fiat.sign}"`);
  }

  ngOnDestroy(): void {
    if (this.convertSub) {
      this.convertSub.unsubscribe();
    }
    this.fiatMapSub.unsubscribe();
    this.cryptoMapSub.unsubscribe();
  }
}
