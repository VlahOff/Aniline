import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioTableRowComponent } from './portfolio/portfolio-table-row/portfolio-table-row.component';
import { AddCoinModalComponent } from './add-coin-modal/add-coin-modal.component';
import { ReactiveFormsModule } from '@angular/forms';



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
