import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AddCoinService } from '../add-coin.service';

@Component({
  selector: 'app-portfolio-table',
  templateUrl: './portfolio-table.component.html',
  styleUrls: ['./portfolio-table.component.css']
})
export class PortfolioTableComponent implements OnInit {

  constructor(private addCoinService: AddCoinService) { }

  ngOnInit(): void {
  }

  showModal() {
    this.addCoinService.isShown.next(true);
  }
}
