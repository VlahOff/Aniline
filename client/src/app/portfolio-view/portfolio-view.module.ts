import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioTableComponent } from './portfolio-table/portfolio-table.component';
import { PortfolioTableRowComponent } from './portfolio-table/portfolio-table-row/portfolio-table-row.component';
import { AddCoinModalComponent } from './add-coin-modal/add-coin-modal.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioTableComponent,
    PortfolioTableRowComponent,
    AddCoinModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioViewModule { }
