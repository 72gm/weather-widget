import { IMain } from '../interfaces/main';
import { IWeather } from '../interfaces/weather';
import { IClouds } from '../interfaces/clouds';
import { IWind } from '../interfaces/wind';

export interface IList{
    dt_txt: string;
    dt: number;
    main: IMain;
    weather: IWeather;
    clouds: IClouds;
    wind: IWind;
}