import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHundredComponent } from './top-hundred/top-hundred.component';
import { NewCoinsComponent } from './new-coins/new-coins.component';
import { CoinsRoutingModule } from './coins-routing.module';
import { CoinTopRowComponent } from './top-hundred/coin-top-row/coin-top-row.component';
import { CoinNewRowComponent } from './new-coins/coin-new-row/coin-new-row.component';
import { GlobalDataComponent } from './global-data/global-data.component';
import { CoinDetailsComponent } from './coin-details/coin-details.component';
import { ChartComponent } from './coin-details/chart/chart.component';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    TopHundredComponent,
    NewCoinsComponent,
    CoinTopRowComponent,
    CoinNewRowComponent,
    GlobalDataComponent,
    CoinDetailsComponent,
    ChartComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    CoinsRoutingModule,
  ]
})
export class CoinsViewModule { }
