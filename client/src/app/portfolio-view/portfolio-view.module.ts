import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AddCoinModalComponent } from './add-coin-modal/add-coin-modal.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioTableRowComponent } from './portfolio/portfolio-table-row/portfolio-table-row.component';
import { PortfolioComponent } from './portfolio/portfolio.component';



@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioTableRowComponent,
    AddCoinModalComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioViewModule { }
