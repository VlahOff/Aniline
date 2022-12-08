import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypto-card',
  templateUrl: './crypto-card.component.html',
  styleUrls: ['./crypto-card.component.css']
})
export class CryptoCardComponent implements OnInit {
  @Input() card!: {
    name: string,
    currentPrice: number,
    priceChange24: number,
    percentageChange24: number
  };

  constructor() { }

  ngOnInit(): void {
  }

}
