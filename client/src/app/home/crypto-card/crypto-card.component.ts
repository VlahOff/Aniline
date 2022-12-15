import { Component, Input, OnInit } from '@angular/core';
import { DetailedCoinDataResponse } from 'src/app/interfaces';

@Component({
  selector: 'app-crypto-card',
  templateUrl: './crypto-card.component.html',
  styleUrls: ['./crypto-card.component.css']
})
export class CryptoCardComponent implements OnInit {
  @Input() card!: DetailedCoinDataResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
