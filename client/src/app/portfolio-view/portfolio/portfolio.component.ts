import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  totalBalanceSub!: Subscription;
  totalBalance = 0;

  totalPnLSub!: Subscription;
  totalPnL = 0;

  totalPnLPercentSub!: Subscription;
  totalPnLPercent = 0;

  isAddCoinModalRenderedSub!: Subscription;
  isAddCoinModalRendered = false;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.isAddCoinModalRenderedSub = this.portfolioService.isAddCoinModalRendered
      .subscribe({ next: t => this.isAddCoinModalRendered = t });

    this.totalBalanceSub = this.portfolioService.totalBalance
      .subscribe({
        next: (t) => {
          this.totalBalance = this.totalBalance + t;
        }
      });

    this.totalPnLSub = this.portfolioService.totalPnL
      .subscribe({
        next: (t) => {
          this.totalPnL = this.totalPnL + t;
        }
      });

    this.totalPnLPercentSub = this.portfolioService.totalPnLPercent
      .subscribe({
        next: (t) => {
          this.totalPnLPercent = (this.totalPnL / (Math.abs(this.totalPnL) + this.totalBalance)) * 100;
        }
      });
  }

  ngOnDestroy(): void {
    this.totalBalanceSub.unsubscribe();
    this.totalPnLSub.unsubscribe();
    this.totalPnLPercentSub.unsubscribe();
    this.isAddCoinModalRenderedSub.unsubscribe();
  }
}
