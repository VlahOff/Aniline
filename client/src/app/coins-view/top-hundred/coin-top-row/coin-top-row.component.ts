import { Component, Input, OnInit } from '@angular/core';
import { TopHundredResponse } from 'src/app/interfaces';

@Component({
  selector: 'app-coin-top-row',
  templateUrl: './coin-top-row.component.html',
  styleUrls: ['./coin-top-row.component.css']
})
export class CoinTopRowComponent implements OnInit {
  @Input() coin!: TopHundredResponse;
  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
