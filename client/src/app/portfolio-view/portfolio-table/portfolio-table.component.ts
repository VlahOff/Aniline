import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { DetailedCoinDataResponse, Transaction, TransactionDetailed } from 'src/app/interfaces';
import { CryptoService } from 'src/app/shared/services/cryptoApi.service';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-portfolio-table',
  templateUrl: './portfolio-table.component.html',
  styleUrls: ['./portfolio-table.component.css']
})
export class PortfolioTableComponent implements OnInit, OnDestroy {
  userTransactions!: string[];
  userTransactionsSub!: Subscription;


  constructor(private portfolioService: PortfolioService, private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.userTransactionsSub = this.portfolioService.getAllTransactions()
      .subscribe({
        next: (data) => {
          console.log(data);
          this.userTransactions = data;
        }
      });
  }

  showModal() {
    this.portfolioService.isShown.next(true);
  }

  ngOnDestroy(): void {
    this.userTransactionsSub.unsubscribe();
  }
}
