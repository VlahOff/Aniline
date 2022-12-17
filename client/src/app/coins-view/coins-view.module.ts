import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHundredComponent } from './top-hundred/top-hundred.component';
import { NewCoinsComponent } from './new-coins/new-coins.component';
import { CoinsRoutingModule } from './coins-routing.module';
import { CoinTopRowComponent } from './top-hundred/coin-top-row/coin-top-row.component';
import { CoinNewRowComponent } from './new-coins/coin-new-row/coin-new-row.component';



@NgModule({
  declarations: [
    TopHundredComponent,
    NewCoinsComponent,
    CoinTopRowComponent,
    CoinNewRowComponent
  ],
  imports: [
    CommonModule,
    CoinsRoutingModule
  ]
})
export class CoinsViewModule { }
