import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CoinsViewResponse } from 'src/app/interfaces';

@Component({
  selector: 'app-coin-data-table',
  templateUrl: './coin-data-table.component.html',
  styleUrls: ['./coin-data-table.component.css']
})
export class CoinDataTableComponent {
  @Input() coinsData$!: Observable<CoinsViewResponse[] | null>;

  constructor() { }
}
