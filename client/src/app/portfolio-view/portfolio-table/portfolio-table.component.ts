import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Transaction } from 'src/app/interfaces';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-portfolio-table',
  templateUrl: './portfolio-table.component.html',
  styleUrls: ['./portfolio-table.component.css']
})
export class PortfolioTableComponent implements OnInit, OnDestroy {
  userTransactions!: Transaction[];
  userTransactionsSub!: Subscription;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.userTransactionsSub = this.portfolioService.getAllTransactions()
      .subscribe({
        next: (data) => {
          console.log(data);
          // this.userTransactions = data;
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
