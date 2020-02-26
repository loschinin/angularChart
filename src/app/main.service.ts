import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})





export class MainService {

  fakeApiData = [
    {
      name: 'Temperature',
      data: [277, 773, 533, 455, 453, 435, 354, 773, 533, 453, 453],
      categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
      visible: true,
      showInLegend: false
    },
    {
      name: 'Wind',
      data: [773, 344, 453, 435, 354, 773, 533, 455, 533, 455, 753],
      categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
      visible: true,
      showInLegend: false
    },
    {
      name: 'Light',
      data: [773, 533, 455, 453, 435, 354, 433, 433, 343, 453, 253],
      categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
      visible: true,
      showInLegend: false
    },
    {
      name: 'Humidity',
      data: [344, 444, 344, 334, 453, 435, 173, 533, 455, 344, 553],
      categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
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

