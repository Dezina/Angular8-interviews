import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'superman'
})
export class SupermanPipe implements PipeTransform {

  transform(data: any[]): any[] {
    if (!data) return [];
    return data.filter(it => {
      return it.hospital.includes('Superman Hospital');
    });
  }

}
