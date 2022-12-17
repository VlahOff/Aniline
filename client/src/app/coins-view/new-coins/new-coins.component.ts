import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CoinsViewNewResponse } from 'src/app/interfaces';
import { CryptoService } from 'src/app/shared/services/cryptoApi.service';

@Component({
  selector: 'app-new-coins',
  templateUrl: './new-coins.component.html',
  styleUrls: ['./new-coins.component.css']
})
export class NewCoinsComponent implements OnInit, OnDestroy {
  newCoins!: CoinsViewNewResponse[];
  newCoinsSub!: Subscription;

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.newCoinsSub = this.cryptoService.newCoins()
      .subscribe({
        next: (res) => {
          this.newCoins = res;
        }
      });
  }

  ngOnDestroy(): void {
    this.newCoinsSub.unsubscribe();
  }
}
