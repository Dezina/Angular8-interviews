import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'robin'
})
export class RobinPipe implements PipeTransform {

  transform(data: any[]): any[] {
    if (!data) return [];
    return data.filter(it => {
      return it.hospital.includes('Robin Hospital');
    });
  }

}
