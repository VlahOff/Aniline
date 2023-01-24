import { Component, Input } from '@angular/core';
import { TopHundredResponse } from 'src/app/interfaces';

@Component({
  selector: 'app-coin-top-row',
  templateUrl: './coin-top-row.component.html',
  styleUrls: ['./coin-top-row.component.css']
})
export class CoinTopRowComponent {
  @Input() coin!: TopHundredResponse;
  @Input() index!: number;

  constructor() { }
}
