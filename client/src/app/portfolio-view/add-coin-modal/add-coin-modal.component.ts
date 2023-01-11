import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AllCoins } from 'src/app/interfaces';
import { NotificationService } from 'src/app/shared/notification/notification.service';
import * as fromApp from '../../+store/app.reducer';
import * as fromPortfolio from '../+store/portfolio.reducer';
import * as PortfolioActions from '../+store/portfolio.actions';
import { getAllCoins } from '../+store/portfolio.selector';

@Component({
  selector: 'app-add-coin-modal',
  templateUrl: './add-coin-modal.component.html',
  styleUrls: ['./add-coin-modal.component.css']
})
export class AddCoinModalComponent implements OnInit {
  allCoins$: Observable<AllCoins[]> = this.store.select(getAllCoins);
  selectedCoinName!: string;

  addCoinForm!: FormGroup;

  constructor(
    private notificationService: NotificationService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.addCoinForm = new FormGroup({
      'coinId': new FormControl(null, Validators.required),
      'coinPrice': new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[1-9])\d*(?:\.\d{0,})?$/)]),
      'quantity': new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[1-9])\d*(?:\.\d{0,})?$/)])
    });
  }

  onSubmit() {
    // console.log(this.addCoinForm.value);

    // const transaction = this.addCoinForm.value;
    // this.submission = this.portfolioService.createTransaction(this.addCoinForm.value)
    //   .subscribe({
    //     next: (res) => {
    //       // console.log(res);
    //     },
    //     error: (err) => {
    //       this.notificationService.createNotification(err.message, 'alert');
    //     },
    //     complete: () => {
    //       console.log('confirmed');
    //     }
    //   });
    // this.addCoinForm.reset();
    // this.portfolioService.transactionsChange.next(['s']);
    // this.portfolioService.isAddCoinModalRendered.next(false);
    // this.router.navigate(['/portfolio'], { relativeTo: this.route });
  }

  filter(value: string) {
    this.store.dispatch(PortfolioActions.setCoinInputField({ payload: value }));

    // if (value) {
    //   this.allCoinsResult = this.allCoins.filter((v) => {
    //     return (v.id.toUpperCase() && v.name.toUpperCase()).startsWith(value.toUpperCase());
    //   });
    // }
  }

  setCoin(coin: AllCoins) {
    // this.selectedCoinName = coin.name;
    // this.addCoinForm.patchValue({ coinId: coin.id });
    // this.resultSorted = undefined;
  }

  hideModal(target: MouseEvent) {
    this.store.dispatch(PortfolioActions.showAddModal());
  }
}
