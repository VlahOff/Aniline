import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DetailedCoinDataResponse } from '../interfaces';
import { CryptoService } from '../shared/services/cryptoApi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  cards!: DetailedCoinDataResponse[]

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
