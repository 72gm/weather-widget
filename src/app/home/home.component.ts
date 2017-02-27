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
import { IList } from '../shared/interfaces/list';
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
    
    this.myData = {
      location: data.city,
      days: []
    }
    // get the first date and use as baseline
    let minDateItem = data.list.reduce(function (a, b) { return a.dt < b.dt ? a : b; });
    let day1Date = new Date(minDateItem.dt_txt);
    let day1List = data.list.filter(function (a) { return day1Date.getDate() === new Date(a.dt_txt).getDate(); });
    
    day1Date.setDate(day1Date.getDate() + 1);
    let day2List = data.list.filter(function (a) { return day1Date.getDate() === new Date(a.dt_txt).getDate(); });
    
    day1Date.setDate(day1Date.getDate() + 1);
    let day3List = data.list.filter(function (a) { return day1Date.getDate() === new Date(a.dt_txt).getDate(); });
    
    day1Date.setDate(day1Date.getDate() + 1);
    let day4List = data.list.filter(function (a) { return day1Date.getDate() === new Date(a.dt_txt).getDate(); });
    
    day1Date.setDate(day1Date.getDate() + 1);
    let day5List = data.list.filter(function (a) { return day1Date.getDate() === new Date(a.dt_txt).getDate(); });

    // create my data object that has a collection for each day
     this.myData.days.push(this.createMyData(day1List));
    this.myData.days.push(this.createMyData(day2List));
    this.myData.days.push(this.createMyData(day3List));
    this.myData.days.push(this.createMyData(day4List));
    this.myData.days.push(this.createMyData(day5List));
  }

  createMyData(day: IList[]){
    console.log(day);
    let dayList =  {
      dayList: day, 
      dayDesc: day[0].weather[0].main.toString(), 
      dayTemp: day.reduce(function (a, b) { return a.main.temp > b.main.temp ? a : b; }).main.temp, 
      dayTime: day[0].dt_txt
     }

      return dayList;
  }
}
