import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

export interface Data {
  name?: string;
  data: number[];
  categories: string[];
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
  filteredData: Data[]
  temperatureData: Data[]
  selectedTemperature = false
  windData: Data[]
  selectedWind = false
  data: Data[] = [];

  startValue = 2010 || null;
  endValue = 2020 || null;
  // variables to transform start-end values in array number
  start: number
  end: number

  showHide = true

  startMin = 2010
  startMax = 2019
  endMin = 2011
  endMax = 2020


  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.filteredData = this.mainService.allData()
    this.incomingData = this.mainService.allData()
    this.data = this.incomingData

  }


  onChange() {

    if (this.startValue <= 2010) { this.start = 0; this.startValue = 2010 }
    if (this.startValue == 2011) { this.start = 1 }
    if (this.startValue == 2012) { this.start = 2 }
    if (this.startValue == 2013) { this.start = 3 }
    if (this.startValue == 2014) { this.start = 4 }
    if (this.startValue == 2015) { this.start = 5 }
    if (this.startValue == 2016) { this.start = 6 }
    if (this.startValue == 2017) { this.start = 7 }
    if (this.startValue == 2018) { this.start = 8 }
    if (this.startValue >= 2019) { this.start = 9; this.startValue = 2019 }


    if (this.endValue <= 2011) { this.end = 2; this.endValue = 2011 }
    if (this.endValue == 2012) { this.end = 3 }
    if (this.endValue == 2013) { this.end = 4 }
    if (this.endValue == 2014) { this.end = 5 }
    if (this.endValue == 2015) { this.end = 6 }
    if (this.endValue == 2016) { this.end = 7 }
    if (this.endValue == 2017) { this.end = 8 }
    if (this.endValue == 2018) { this.end = 9 }
    if (this.endValue == 2019) { this.end = 10 }
    if (this.endValue >= 2020) { this.end = 11; this.endValue = 2020 }

    if (this.startValue < this.endValue) {


                 
      

      this.filteredData = this.incomingData.map(d =>
        ({
          name: d.name,
          data: d.data.slice(this.start, this.end),
          categories: d.categories.slice(this.start, this.end),
          visible: d.visible,
          showInLegend: d.showInLegend
        })
      )
      this.data = this.filteredData
    }
  }


  selectTemperature() {     
    this.data = this.filteredData.filter(d => d.name === 'Temperature')
    this.showHide = false  

  }
  selectWind() {        
    this.data = this.filteredData.filter(d => d.name === 'Wind')
    this.showHide = false    
    
  }
  selectHumidity() {
    this.data = this.filteredData.filter(d => d.name === 'Humidity')
    this.showHide = false
  }
  selectLight() {
    this.data = this.filteredData.filter(d => d.name === 'Light')
    this.showHide = false
  }
  selectAllSingle() {
    this.data = this.filteredData    
    this.showHide = true    
  }


}
