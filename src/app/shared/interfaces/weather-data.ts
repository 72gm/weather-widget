import { ICity } from '../interfaces/city';
import { IList } from '../interfaces/list';

export interface IWeatherData{
    city: ICity;
    list: IList[];
}