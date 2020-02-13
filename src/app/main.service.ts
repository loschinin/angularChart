import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})





export class MainService {

  fakeApiData = [
    {
      name: 'Temperature',
      data: [277, 773, 533, 455],
      year: 2019,
      visible: true,
      showInLegend: false
    },
    {
      name: 'Wind',
      data: [254, 453, 435, 354],
      year: 2017,
      visible: true,
      showInLegend: false
    },
    {
      name: 'Light',
      data: [433, 343, 433, 343],
      year: 2020,
      visible: true,
      showInLegend: false
    },
    {
      name: 'Humidity',
      data: [344, 444, 344, 334],
      year: 2016,
      visible: true,
      showInLegend: false
    }
  ]

  constructor() { }

  allData() {
    return this.fakeApiData
  }


  
  temp = this.fakeApiData[0].data
  wind = this.fakeApiData[1].data
  light = this.fakeApiData[2].data
  humidity = this.fakeApiData[3].data

}

