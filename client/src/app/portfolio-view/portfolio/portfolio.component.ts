import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AddCoinService } from '../add-coin.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  addCoinSub!: Subscription;
  isAddCoinModal = false;

  constructor(private addCoinService: AddCoinService) { }

  ngOnInit(): void {
    this.addCoinSub = this.addCoinService.isShown
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
