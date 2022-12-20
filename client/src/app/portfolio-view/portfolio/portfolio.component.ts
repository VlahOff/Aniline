import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  addCoinSub!: Subscription;
  isAddCoinModal = false;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.addCoinSub = this.portfolioService.isShown
      .subscribe({
        next: (t) => {
          this.isAddCoinModal = t;
        }
      });
  }

  ngOnDestroy(): void {
    this.addCoinSub.unsubscribe();
  }
}
