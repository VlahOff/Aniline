import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CoinsViewTopResponse } from 'src/app/interfaces';
import { CryptoService } from 'src/app/services/cryptoApi.service';

@Component({
  selector: 'app-top-hundred',
  templateUrl: './top-hundred.component.html',
  styleUrls: ['./top-hundred.component.css']
})
export class TopHundredComponent implements OnInit, OnDestroy {
  topHundred!: CoinsViewTopResponse[];
  topHundredSub!: Subscription;

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.topHundredSub = this.cryptoService.topHundred()
      .subscribe({
        next: (res) => {
          this.topHundred = res;
        }
      });
  }

  ngOnDestroy(): void {
    this.topHundredSub.unsubscribe();
  }
}
