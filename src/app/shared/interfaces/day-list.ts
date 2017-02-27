import { IList   } from '../interfaces/list';

export interface IDayList{
    dayTime: string;
    dayTemp: number;
    dayDesc: string;
    dayList: IList[];
}