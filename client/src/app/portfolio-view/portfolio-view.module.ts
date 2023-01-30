import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddCoinModalComponent } from './add-coin-modal/add-coin-modal.component';
import { EditCoinModalComponent } from './edit-coin-modal/edit-coin-modal.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioTableRowComponent } from './portfolio/portfolio-table-row/portfolio-table-row.component';
import { PortfolioComponent } from './portfolio/portfolio.component';



@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioTableRowComponent,
    AddCoinModalComponent,
    EditCoinModalComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PortfolioRoutingModule,
  ]
})
export class PortfolioViewModule { }
