import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AllCoins } from 'src/app/interfaces';
import { CryptoService } from 'src/app/shared/services/cryptoApi.service';
import { AddCoinService } from '../add-coin.service';

@Component({
  selector: 'app-add-coin-modal',
  templateUrl: './add-coin-modal.component.html',
  styleUrls: ['./add-coin-modal.component.css']
})
export class AddCoinModalComponent implements OnInit, OnDestroy {
  allCoins!: AllCoins[];
  allCoinsSub!: Subscription;
  resultSorted!: AllCoins[] | undefined;

  addCoinForm!: FormGroup;
  selectedCoin!: string;

  constructor(
    private addCoinService: AddCoinService,
    private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.allCoinsSub = this.cryptoService.getAllCoins()
      .subscribe({
        next: (data) => {
          this.allCoins = data;
        }
      });
    console.log('Request has been made');

    this.addCoinForm = new FormGroup({
      'coin': new FormControl(null, Validators.required),
      'coinPrice': new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[1-9])\d*(?:\.\d{0,})?$/)]),
      'quantity': new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[1-9])\d*(?:\.\d{0,})?$/)])
    });
  }

  onSubmit() {
    console.log(this.addCoinForm.value);
  }

  filter(value: string) {
    if (value) {
      setTimeout(() => {
        this.resultSorted = this.allCoins.filter((v) => {
          return (v.id.toUpperCase() && v.name.toUpperCase()).startsWith(value.toUpperCase());
        });
      }, 500);
      console.log(this.resultSorted);
    } else {
      this.resultSorted = undefined;
    }
  }

  setCoin(coin: AllCoins) {
    this.selectedCoin = coin.name;
    this.resultSorted = undefined;
  }

  hideModal() {
    this.addCoinService.isShown.next(false);
  }

  ngOnDestroy(): void {
    this.allCoinsSub.unsubscribe();
  }
}
