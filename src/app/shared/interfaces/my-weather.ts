import { ICity } from '../interfaces/city';
import { IDayList } from '../interfaces/day-list';

export interface IMyWeather{
    location: ICity;
    days: IDayList[];
}