import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../+store/app.reducer';
import * as AppStateActions from '../../+store/appState.actions';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-error-banner',
  templateUrl: './error-banner.component.html',
  styleUrls: ['./error-banner.component.css']
})
export class ErrorBannerComponent implements OnInit {
  @Input() errorMessage!: string | null;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.store.dispatch(AppStateActions.clearError());
    }, 4000);
  }
}
