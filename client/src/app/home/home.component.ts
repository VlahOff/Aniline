import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards = [
    {
      name: 'Bitcoin',
      currentPrice: 16000,
      priceChange24: 120,
      percentageChange24: 2.43
    },
    {
      name: 'Ethereum',
      currentPrice: 1200,
      priceChange24: 120,
      percentageChange24: 2.43
    },
    {
      name: 'Cardano',
      currentPrice: 0.40,
      priceChange24: 120,
      percentageChange24: 2.43
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
