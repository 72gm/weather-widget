import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { pageTransition } from '../shared/animations/animations';
import { Weather5DayService } from '../shared/services/weather-5day.service';
import { IWeatherData } from '../shared/interfaces/weather-data';
import { IMyWeather } from '../shared/interfaces/my-weather';
import { IDayItem } from '../shared/interfaces/day-item';
import { IDayOther } from '../shared/interfaces/day-other';
import { IDayList } from '../shared/interfaces/day-list';

@Component({
  templateUrl: './home.component.html',
  animations: [pageTransition]
})
export class HomeComponent implements OnInit {
  state = 'in';
  thereHasBeenAnError = false;
  myData: IMyWeather;

  ngOnInit() {
    this.state = (this.state === 'in' ? 'out' : 'in');
  }

  constructor(private weatherService: Weather5DayService) {
    this.get5DayWeather();
  }

  get5DayWeather() {
    this.weatherService.get5DayWeather('malaga', 'esp', 'json')
      .subscribe(
      localWeatherData => {
        this.convertData(localWeatherData);
      },
      error => {
        console.log(error);
        this.thereHasBeenAnError = true;
      }
      );
  }

  convertData(data: IWeatherData) {
    // get min and max dates
    this.myData = {location: data.city,
      days: []
    }
    let minDateItem = data.list.reduce(function (a, b) { return a.dt < b.dt ? a : b; });
    let day1Date = new Date(minDateItem.dt_txt);
    let day1 = data.list.filter(function (a) { return day1Date.getDate() === new Date(a.dt_txt).getDate(); });   
    day1Date.setDate(day1Date.getDate() + 1);
    console.log(day1);
    let day2 = data.list.filter(function (a) { return day1Date.getDate() === new Date(a.dt_txt).getDate(); });
    day1Date.setDate(day1Date.getDate() + 1);
    console.log(day1Date);
    let day3 = data.list.filter(function (a) { return day1Date.getDate() === new Date(a.dt_txt).getDate(); });
    day1Date.setDate(day1Date.getDate() + 1);
    console.log(day1Date);
    let day4 = data.list.filter(function (a) { return day1Date.getDate() === new Date(a.dt_txt).getDate(); });
    day1Date.setDate(day1Date.getDate() + 1);
    console.log(day1Date);
    let day5 = data.list.filter(function (a) { return day1Date.getDate() === new Date(a.dt_txt).getDate(); });
    
    this.myData.days.push({dayList: day1, dayDesc: day1[0].weather[0].main, 
          dayTemp: day1.reduce(function (a, b) { return a.main.temp > b.main.temp ? a : b; }).main.temp,dayTime: day1[0].dt_txt});
    this.myData.days.push({dayList: day2, dayDesc: day2[0].weather[0].main, 
      dayTemp: day2.reduce(function (a, b) { return a.main.temp > b.main.temp ? a : b; }).main.temp,dayTime: day2[0].dt_txt});
    this.myData.days.push({dayList: day3, dayDesc: day3[0].weather[0].main, 
      dayTemp: day3.reduce(function (a, b) { return a.main.temp > b.main.temp ? a : b; }).main.temp,dayTime: day3[0].dt_txt});
    this.myData.days.push({dayList: day4, dayDesc: day4[0].weather[0].main, 
      dayTemp: day4.reduce(function (a, b) { return a.main.temp > b.main.temp ? a : b; }).main.temp, dayTime: day4[0].dt_txt});
    this.myData.days.push({dayList: day5, dayDesc: day5[0].weather[0].main, 
      dayTemp: day5.reduce(function (a, b) { return a.main.temp > b.main.temp ? a : b; }).main.temp, dayTime: day5[0].dt_txt});
    console.log('mydata');
    console.log(this.myData);

  }
}