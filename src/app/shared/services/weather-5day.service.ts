import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { EnvironmentText } from '../classes/environment-text';
import { IWeatherData } from '../interfaces/weather-data';

@Injectable()
export class Weather5DayService{
    httpAddress = EnvironmentText.HttpUrl;

    constructor(private _http: Http){}

    get5DayWeather(parameter_city: string, parameter_country: string, 
                    parameter_mode: string ): Observable<IWeatherData> {
        let weatherUrl = this.httpAddress.concat('q=', parameter_city, ',', parameter_country, '&mode=', 
                                    parameter_mode, '&', EnvironmentText.APPID);

        return this._http.get(weatherUrl)
        .map(
            (response: Response) => <IWeatherData>response.json()
            )
        .catch(this.handleError)
        ;
    }

    private handleError(error: Response){
        console.log(error);
        return Observable.throw(error.json().error || 'server error');
    }
}