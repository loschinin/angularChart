import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})


export class ChartComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions: {}
  @Input() title: string = ''
  @Input() year: number
  @Input() data
  updateFlag: boolean = false;

  constructor() { }

  setTypeBar() {
    this.chartOptions['chart'] = { type: "column" }
    this.updateFlag = true;
  }
  setTypeLine() {
    this.chartOptions['chart'] = { type: "line" }
    this.updateFlag = true;
  }

  setTypeArea() {
    this.chartOptions['chart'] = { type: "area" }
    this.updateFlag = true;
  }

  setColorLight() {
    this.chartOptions['chart'] = {
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
        stops: [
          [0, 'LightGray'],
          [1, 'Gainsboro']
        ]
      }
    }
    this.updateFlag = true;
  }
  setColorDark() {
    this.chartOptions['chart'] = {
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
        stops: [
          [0, '#2a2a2b'],
          [1, '#3e3e40']
        ]
      }
    }
    this.updateFlag = true;
  }

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
        text: this.title + ' (created at ' + this.year + ')',
        style: {
          color: 'LightSlateGrey',
          fontSize: '15px'
        }
      },
      yAxis: {
        title: {
          enabled: false
        }
      },
      legend: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        itemStyle: {
          color: '#E0E0E3'
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
          pointStart: 2000,
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
      // SERIES 
      series: [this.data],
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
    };
  }

}
