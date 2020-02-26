import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-combined',
  templateUrl: './combined.component.html',
  styleUrls: ['./combined.component.scss']
})
export class CombinedComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions: {}
  updateFlag: boolean = false;


  constructor(private mainService: MainService) { }


  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'line',
        backgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
          stops: [
            [0, 'LightGray'],
            [1, 'Gainsboro']
          ]
        },
        style: {
          fontFamily: '\'Unica One\', sans-serif',
          size: null
        },
        plotBorderColor: '#606063'

      },

      title: {
        text: 'All sensors',
        style: {
          color: 'LightSlateGrey',
          fontSize: '20px'
        }
      },
      xAxis: {
        categories: this.mainService.categories,
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
      yAxis: {
        title: {
          enabled: false
        }
      },
      legend: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        itemStyle: {
          color: '#ffffff'
        },
        itemHoverStyle: {
          color: '#FFF'
        },
        itemHiddenStyle: {
          color: '#606063'
        },
        title: {
          style: {
            color: '#C0C0C0'
          }
        },
        align: 'center',
        verticalAlign: 'bottom',
        layout: 'horizontal'
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          /* pointStart: 2000, */
          dataLabels: {
            color: '#F0F0F3',
            style: {
              fontSize: '13px'
            }
          },
          marker: {
            lineColor: '#333'
          }
        },
        boxplot: {
          fillColor: '#505053'
        },
        candlestick: {
          lineColor: 'white'
        },
        errorbar: {
          color: 'white'
        }
      },
      // SERIES //
      series: [
        {
          name: 'Temperature',
          data: this.mainService.temp
        },
        {
          name: 'Wind',
          data: this.mainService.wind
        },
        {
          name: 'Light',
          data: this.mainService.light
        },
        {
          name: 'Humidity',
          data: this.mainService.humidity
        }
      ],
      credits: {
        enabled: false
      },
      labels: {
        style: {
          color: '#707073'
        }
      },
      drilldown: {
        activeAxisLabelStyle: {
          color: '#F0F0F3'
        },
        activeDataLabelStyle: {
          color: '#F0F0F3'
        }
      },
      navigation: {
        buttonOptions: {
          symbolStroke: '#DDDDDD',
          theme: {
            fill: '#505053'
          }
        }
      },

      responsive: {
        rules: [{
          condition: {
            maxWidth: 400
          },
          chartOptions: {
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'horizontal'
            },
            yAxis: {
              labels: {
                align: 'left',
                x: 0,
                y: -5
              },
              title: {
                text: null
              }
            },
            subtitle: {
              text: null
            },
            credits: {
              enabled: false
            }
          }
        }]
      }
    }; // required
  }

}
