import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddCoinModalComponent } from './add-coin-modal/add-coin-modal.component';
import { EditCoinModalComponent } from './edit-coin-modal/edit-coin-modal.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioTableComponent } from './portfolio-table/portfolio-table.component';



@NgModule({
  declarations: [
    PortfolioComponent,
    AddCoinModalComponent,
    EditCoinModalComponent,
    PortfolioTableComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PortfolioRoutingModule,
  ]
})
export class PortfolioViewModule { }
