import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

export interface Data {
  name?: string;
  data: number[];
  year: number;
  visible?: boolean,
  showInLegend?: boolean
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  incomingData: Data[] = []
  data: Data[] = [];


  sortChartOld() {
    this.data = this.incomingData
    this.data.sort((a, b) => a.year - b.year)
  }
  sortChartNew() {
    this.data = this.incomingData
    this.data.sort((a, b) => b.year - a.year)
  }


  selectTemperature() {
    this.data = this.incomingData.filter(d => d.name === 'Temperature')
  }
  selectWind() {
    this.data = this.incomingData.filter(d => d.name === 'Wind')
  }
  selectHumidity() {
    this.data = this.incomingData.filter(d => d.name === 'Humidity')
  }
  selectLight() {
    this.data = this.incomingData.filter(d => d.name === 'Light')
  }
  selectAllSingle() {
    this.data = this.incomingData
  }



  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.incomingData = this.mainService.allData()
    this.data = this.incomingData

  }

}
