import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-error-banner',
  templateUrl: './error-banner.component.html',
  styleUrls: ['./error-banner.component.css']
})
export class ErrorBannerComponent {
  @Input() errorMessage!: string | null;
}
