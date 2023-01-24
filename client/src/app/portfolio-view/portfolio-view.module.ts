import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';

import { AddCoinModalComponent } from './add-coin-modal/add-coin-modal.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioTableRowComponent } from './portfolio/portfolio-table-row/portfolio-table-row.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EditCoinModalComponent } from './edit-coin-modal/edit-coin-modal.component';



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
    PortfolioRoutingModule,
    LoadingSpinnerComponent
  ]
})
export class PortfolioViewModule { }
