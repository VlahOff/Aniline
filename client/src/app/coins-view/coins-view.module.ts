import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PercentTickerComponent } from '../shared/percent-ticker/percent-ticker.component';
import { CoinDataTableComponent } from './coin-data-table/coin-data-table.component';
import { ChartComponent } from './coin-details/chart/chart.component';
import { CoinDetailsComponent } from './coin-details/coin-details.component';
import { CoinsRoutingModule } from './coins-routing.module';
import { GlobalDataComponent } from './global-data/global-data.component';
import { NewCoinsComponent } from './new-coins/new-coins.component';
import { TopHundredComponent } from './top-hundred/top-hundred.component';

@NgModule({
  declarations: [
    TopHundredComponent,
    NewCoinsComponent,
    GlobalDataComponent,
    CoinDetailsComponent,
    ChartComponent,
    CoinDataTableComponent,
  ],
  imports: [
    CommonModule,
    CoinsRoutingModule,
    PercentTickerComponent
  ]
})
export class CoinsViewModule { }
