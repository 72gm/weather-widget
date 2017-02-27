import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'kelvinconvert'
})

export class KelvinConvertPipe implements PipeTransform {
    transform(value: number): number {
        if (!value){ return value;}

        return Math.round(value - 273.15);
    }
}