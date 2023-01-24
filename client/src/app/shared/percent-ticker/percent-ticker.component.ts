import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-percent-ticker',
  templateUrl: './percent-ticker.component.html',
  styleUrls: ['./percent-ticker.component.css'],
  imports: [CommonModule]
})
export class PercentTickerComponent {
  @Input() percent!: number

  constructor() { }
}
