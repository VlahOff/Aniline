import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import Chart from 'chart.js/auto';
import { Observable, Subscription } from 'rxjs';
import { getCoinDetailsChart } from 'src/app/+store/crypto.selector';

import { ChartData } from 'src/app/interfaces';
import * as fromApp from '../../../+store/app.reducer';
import * as CryptoActions from '../../../+store/crypto.actions';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnDestroy {
  chartSub!: Subscription;
  @Input() chart$!: Observable<ChartData[] | null>;
  @Input() coinId!: string;

  chartData!: ChartData[] | undefined;
  labels: string[] = [];
  timeStamp: number[] = [];
  chart!: Chart;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.chartSub = this.chart$
      .subscribe(v => {
        if (v) {
          this.chartData = v;
          if (this.chartData!.length > 25) {
            // this.chartData.forEach(v => this.labels.push(new Date(v.time).toLocaleDateString("de-DE", { day: 'numeric', month: 'short' })));
            this.chartData.forEach(v => this.labels.push(new Date(v.time).toLocaleDateString("de-DE")));
          } else {
            this.chartData.forEach(v => this.labels.push(new Date(v.time).toLocaleTimeString("de-DE", { hour: 'numeric', minute: 'numeric' })));
          }
          this.chartData.forEach(v => this.timeStamp.push(v.price));

          this.chart = new Chart("acquisitions", {
            type: 'line', //this denotes tha type of chart

            data: {// values on X-Axis
              labels: this.labels,
              datasets: [
                {
                  data: this.timeStamp,
                  pointStyle: false,
                  borderColor: 'crimson',
                },
              ]
            },
            options: {
              plugins: {
                tooltip: {
                  enabled: true
                }
              }
            }
          });
        }
      });


    Chart.defaults.plugins.legend.display = false;
    Chart.defaults.color = 'white';
  }

  fetchChartOneDay() {
    this.chart.destroy();
    this.store.dispatch(CryptoActions.fetchChartData({ payload: { coinId: this.coinId, days: 1 } }));
  }

  fetchChartOneWeek() {
    this.chart.destroy();
    this.store.dispatch(CryptoActions.fetchChartData({ payload: { coinId: this.coinId, days: 7 } }));
  }

  fetchChartOneMonth() {
    this.chart.destroy();
    this.store.dispatch(CryptoActions.fetchChartData({ payload: { coinId: this.coinId, days: 30 } }));
  }

  ngOnDestroy(): void {
    this.chartSub.unsubscribe();
    this.chart.destroy();
    this.store.dispatch(CryptoActions.setChartData({ payload: null }));
  }
}