import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DetailedCoinDataResponse } from '../interfaces';
import { CryptoService } from '../services/cryptoApi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  cards: DetailedCoinDataResponse[] = [
    // {
    //   name: 'Bitcoin',
    //   currentPrice: 16000,
    //   priceChange24: 120,
    //   percentageChange24: 2.43
    // },
    // {
    //   name: 'Ethereum',
    //   currentPrice: 1200,
    //   priceChange24: 120,
    //   percentageChange24: 2.43
    // },
    // {
    //   name: 'Cardano',
    //   currentPrice: 0.40,
    //   priceChange24: 120,
    //   percentageChange24: 2.43
    // }
  ];

  topSub!: Subscription;

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.topSub = this.cryptoService.topThree()
      .subscribe({
        next: (data) => {
          this.cards = data;
        }
      });
  }

  ngOnDestroy(): void {
    this.topSub.unsubscribe();
  }
}
