import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import Chart from 'chart.js/auto';
import { Observable, Subscription } from 'rxjs';

import { getChartPeriod, getCoinDetailsChart } from 'src/app/+store/crypto.selector';
import { ChartData } from 'src/app/interfaces';
import * as fromApp from '../../../+store/app.reducer';
import * as CryptoActions from '../../../+store/crypto.actions';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnDestroy {
  @Input() coinId!: string;
  chartSub!: Subscription;
  chartPeriod$!: Observable<number | null>;
  chart$!: Observable<ChartData[] | null>;

  chartData!: ChartData[] | undefined;
  labels: string[] = [];
  timeStamp: number[] = [];
  chart!: Chart;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(
      CryptoActions.fetchChartData({ payload: { coinId: this.coinId, days: 1 } }));
    this.chart$ = this.store.select(getCoinDetailsChart);

    this.chartSub = this.chart$
      .subscribe(v => {
        if (v) {
          this.chartData = v;

          if (this.labels.length > 0 && this.timeStamp.length > 0) {
            this.labels = [];
            this.timeStamp = [];
          }

          this.chartData.forEach(v => {
            this.labels.push(new Date(v.time).toLocaleString("de-DE",
              {
                hour: '2-digit',
                minute: "2-digit",
                day: '2-digit',
                month: 'short',
                year: '2-digit'
              }));
          });

          this.chartData.forEach(v => this.timeStamp.push(v.price));

          this.createChart();
          this.chart.update();
        }
      });

    Chart.defaults.color = '#fff';
    this.chartPeriod$ = this.store.select(getChartPeriod);
  }

  fetchChartOneDay() {
    this.store.dispatch(
      CryptoActions.fetchChartData({ payload: { coinId: this.coinId, days: 1 } })
    );
    this.store.dispatch(
      CryptoActions.setChartPeriod({ payload: 1 })
    );
    this.chart.destroy();
  }

  fetchChartOneWeek() {
    this.store.dispatch(
      CryptoActions.fetchChartData({ payload: { coinId: this.coinId, days: 7 } }))
      ;
    this.store.dispatch(
      CryptoActions.setChartPeriod({ payload: 7 })
    );
    this.chart.destroy();
  }

  fetchChartOneMonth() {
    this.store.dispatch(
      CryptoActions.fetchChartData({ payload: { coinId: this.coinId, days: 30 } })
    );
    this.store.dispatch(
      CryptoActions.setChartPeriod({ payload: 30 })
    );
    this.chart.destroy();
  }

  ngOnDestroy(): void {
    this.chartSub.unsubscribe();
    this.chart.destroy();
    this.store.dispatch(CryptoActions.setChartData({ payload: null }));
  }

  createChart() {
    this.chart = new Chart("acquisitions", {
      type: 'line', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: this.labels,
        datasets: [
          {
            data: this.timeStamp,
            pointStyle: false,
            borderColor: 'crimson',
            tension: 0.1
          },
        ]
      },
      options: {
        animation: {
          easing: 'easeInSine'
        },
        elements: {
          point: {
            hoverRadius: 18
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: true
          }
        }
      }
    });
  }
}