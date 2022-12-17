import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalDataResponse } from 'src/app/interfaces';
import { CryptoService } from 'src/app/shared/services/cryptoApi.service';

@Component({
  selector: 'app-global-data',
  templateUrl: './global-data.component.html',
  styleUrls: ['./global-data.component.css']
})
export class GlobalDataComponent implements OnInit, OnDestroy {
  globalData!: GlobalDataResponse;
  dataSub!: Subscription;

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.dataSub = this.cryptoService.getGlobalData()
      .subscribe({
        next: (res) => {
          this.globalData = res;
        }
      });
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
  }
}
