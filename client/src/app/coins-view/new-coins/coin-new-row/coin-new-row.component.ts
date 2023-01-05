import { Component, Input, OnInit } from '@angular/core';
import { NewCoinsResponse } from 'src/app/interfaces';

@Component({
  selector: 'app-coin-new-row',
  templateUrl: './coin-new-row.component.html',
  styleUrls: ['./coin-new-row.component.css']
})
export class CoinNewRowComponent implements OnInit {
  @Input() coin!: NewCoinsResponse;
  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
