import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';
import { PercentTickerComponent } from '../shared/percent-ticker/percent-ticker.component';
import { ChartComponent } from './coin-details/chart/chart.component';
import { CoinDetailsComponent } from './coin-details/coin-details.component';
import { CoinsRoutingModule } from './coins-routing.module';
import { GlobalDataComponent } from './global-data/global-data.component';
import { CoinNewRowComponent } from './new-coins/coin-new-row/coin-new-row.component';
import { NewCoinsComponent } from './new-coins/new-coins.component';
import { TopHundredComponent } from './top-hundred/top-hundred.component';
import { CoinDataTableComponent } from './coin-data-table/coin-data-table.component';

@NgModule({
  declarations: [
    TopHundredComponent,
    NewCoinsComponent,
    CoinNewRowComponent,
    GlobalDataComponent,
    CoinDetailsComponent,
    ChartComponent,
    CoinDataTableComponent,
  ],
  imports: [
    CommonModule,
    CoinsRoutingModule,
    LoadingSpinnerComponent,
    PercentTickerComponent
  ]
})
export class CoinsViewModule { }
