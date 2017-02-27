import { IDayOther } from '../interfaces/day-other'

export interface IDayItem{
    dayOrder: number;
    dayDate: Date;
    dayTemp: number;
    dayDesc: string;
    daysOther: IDayOther[];
}