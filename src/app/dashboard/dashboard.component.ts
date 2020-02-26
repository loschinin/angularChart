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
  data: Data[] = [];

  startValue = 2010 || null;
  endValue = 2020 || null;

  /* option2015 = '2015' */



  onChange() {
    let start = this.startValue
    
    if (start <= 2010) { start = 0 }
    if (start == 2011) { start = 1 }
    if (start == 2012) { start = 2 }
    if (start == 2013) { start = 3 }
    if (start == 2014) { start = 4 }
    if (start == 2015) { start = 5 }
    if (start == 2016) { start = 6 }
    if (start == 2017) { start = 7 }
    if (start >= 2018) { start = 8 }


    let end = this.endValue    
    if (end <= 2012) { end = 3 }
    if (end == 2013) { end = 4 }
    if (end == 2014) { end = 5 }
    if (end == 2015) { end = 6 }
    if (end == 2016) { end = 7 }
    if (end == 2017) { end = 8 }
    if (end == 2018) { end = 9 }
    if (end == 2019) { end = 10 }
    if (end >= 2020) { end = 11 }

/* console.log(this.option2015); */

    this.data = this.incomingData.map(d =>
      ({
        name: d.name,
        data: d.data.slice(start, end),
        categories: d.categories.slice(start, end),
        visible: d.visible,
        showInLegend: d.showInLegend
      })
    )
    
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
    console.log(this.data)
  }



  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.incomingData = this.mainService.allData()
    this.data = this.incomingData

  }

}
