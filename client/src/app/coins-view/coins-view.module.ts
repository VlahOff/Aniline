import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';
import { ChartComponent } from './coin-details/chart/chart.component';
import { CoinDetailsComponent } from './coin-details/coin-details.component';
import { CoinsRoutingModule } from './coins-routing.module';
import { GlobalDataComponent } from './global-data/global-data.component';
import { CoinNewRowComponent } from './new-coins/coin-new-row/coin-new-row.component';
import { NewCoinsComponent } from './new-coins/new-coins.component';
import { CoinTopRowComponent } from './top-hundred/coin-top-row/coin-top-row.component';
import { TopHundredComponent } from './top-hundred/top-hundred.component';

@NgModule({
  declarations: [
    TopHundredComponent,
    NewCoinsComponent,
    CoinTopRowComponent,
    CoinNewRowComponent,
    GlobalDataComponent,
    CoinDetailsComponent,
    ChartComponent,
  ],
  imports: [
    CommonModule,
    CoinsRoutingModule,
    LoadingSpinnerComponent
  ]
})
export class CoinsViewModule { }
