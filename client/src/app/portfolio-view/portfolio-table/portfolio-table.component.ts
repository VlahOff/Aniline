import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CryptoService } from 'src/app/shared/services/cryptoApi.service';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-portfolio-table',
  templateUrl: './portfolio-table.component.html',
  styleUrls: ['./portfolio-table.component.css']
})
export class PortfolioTableComponent implements OnInit, OnDestroy {
  transactionChange!: Subscription;
  userTransactions!: string[];
  userTransactionsSub!: Subscription;

  constructor(private portfolioService: PortfolioService, private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.transactionChange = this.portfolioService.transactionsChange
      .subscribe({ next: v => this.getData() });
    this.getData();
  }

  private getData() {
    this.userTransactionsSub = this.portfolioService.getAllTransactions()
      .subscribe({
        next: (data) => {
          this.userTransactions = data;
        }
      });
  }

  showAddCoinModal() {
    this.portfolioService.isAddCoinModalRendered.next(true);
  }
  
  ngOnDestroy(): void {
    this.userTransactionsSub.unsubscribe();
    this.transactionChange.unsubscribe();
  }
}