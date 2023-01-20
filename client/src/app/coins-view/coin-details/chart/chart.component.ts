import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { map, Observable, Subscription } from 'rxjs';
import { ChartData, DetailedCoinDataResponse } from 'src/app/interfaces';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnDestroy {
  chartSub!: Subscription;
  @Input() data!: Observable<DetailedCoinDataResponse | null>;
  chartData!: ChartData[] | undefined;
  labels: string[] = [];
  timeStamp: number[] = [];
  chart!: any;

  constructor() { }

  ngOnInit(): void {
    this.chartSub = this.data
      .subscribe(v => {
        if (v) {
          this.chartData = v.chartData;
          this.chartData.forEach(v => this.labels.push(new Date(v.time).toLocaleTimeString("de-DE", { hour: 'numeric', minute: 'numeric' })));
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
                  enabled: false
                }
              }
            }
          });
        }
      });


    Chart.defaults.plugins.legend.display = false;
    Chart.defaults.color = 'white';
  }

  ngOnDestroy(): void {
    this.chart = null;
  }
}