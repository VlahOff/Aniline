import { Component, Input, OnInit } from '@angular/core';
import { CoinsViewTopResponse } from 'src/app/interfaces';

@Component({
  selector: 'app-coin-top-row',
  templateUrl: './coin-top-row.component.html',
  styleUrls: ['./coin-top-row.component.css']
})
export class CoinTopRowComponent implements OnInit {
  @Input() coin!: CoinsViewTopResponse;
  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
