import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioTableComponent } from './portfolio-table/portfolio-table.component';
import { PortfolioTableRowComponent } from './portfolio-table/portfolio-table-row/portfolio-table-row.component';



@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioTableComponent,
    PortfolioTableRowComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioViewModule { }
