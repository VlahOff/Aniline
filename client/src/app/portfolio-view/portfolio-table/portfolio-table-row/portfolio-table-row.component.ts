import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Transaction, TransactionDetailed } from 'src/app/interfaces';
import { CryptoService } from 'src/app/shared/services/cryptoApi.service';
import { PortfolioService } from '../../portfolio.service';
import { PortfolioTableComponent } from '../portfolio-table.component';

@Component({
  selector: 'app-portfolio-table-row',
  templateUrl: './portfolio-table-row.component.html',
  styleUrls: ['./portfolio-table-row.component.css']
})
export class PortfolioTableRowComponent implements OnInit, OnDestroy {
  deleteSub!: Subscription;
  detailSub!: Subscription;
  @Input() transactionId!: string;
  detailedTransaction!: TransactionDetailed;

  constructor(
    private portfolioService: PortfolioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.detailSub = this.portfolioService.getTransaction(this.transactionId)
      .subscribe({
        next: (data) => {
          this.detailedTransaction = data;
          this.portfolioService.totalBalance
            .next(this.detailedTransaction.current_price * this.detailedTransaction.quantity);
          this.portfolioService.totalPnL
            .next((this.detailedTransaction.current_price - this.detailedTransaction.coinPrice) * this.detailedTransaction.quantity);
          this.portfolioService.totalPnLPercent
            .next(1);
        }
      });
  }

  removeTransaction() {
    this.deleteSub = this.portfolioService.deleteTransaction(this.transactionId)
      .subscribe(res => console.log(res));
    this.portfolioService.transactionsChange.next(['s']);
    this.portfolioService.totalBalance
      .next(-(this.detailedTransaction.current_price * this.detailedTransaction.quantity));
    this.portfolioService.totalPnL
      .next(-(this.detailedTransaction.current_price - this.detailedTransaction.coinPrice) * this.detailedTransaction.quantity);
    this.portfolioService.totalPnLPercent.next(1);
  }

  ngOnDestroy(): void {
    if (this.deleteSub) {
      this.deleteSub.unsubscribe();
    }
    this.detailSub.unsubscribe();
  }
}
