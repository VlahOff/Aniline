import { Component, Input, OnInit } from '@angular/core';

import { CoinsView } from 'src/app/interfaces';

@Component({
  selector: 'app-crypto-card',
  templateUrl: './crypto-card.component.html',
  styleUrls: ['./crypto-card.component.css']
})
export class CryptoCardComponent implements OnInit {
  @Input() card!: CoinsView;

  constructor() { }

  ngOnInit(): void {
  }

}
