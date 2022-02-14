import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
        const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
        if (seconds < 29) 
            return 'Just now';
        const range:any = {
            'year': 31536000,
            'month': 2592000,
            'week': 604800,
            'day': 86400,
            'hour': 3600,
            'minute': 60,
            'second': 1
        };
        let counter;
        for (let j in range) {
            counter = Math.floor(seconds/range[j]);
            if (counter > 0)
                if (counter === 1) {
                    return counter + ' ' + j + ' ago'; 
                } else {
                    return counter + ' ' + j + 's ago'; 
                }
        }
    }
    return value;
}

}
