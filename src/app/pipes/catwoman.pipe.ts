import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'catwoman'
})
export class CatwomanPipe implements PipeTransform {

  transform(data: any[]): any[] {
    if (!data) return [];
    return data.filter(it => {
      return it.hospital.includes('Catwoman Hospital');
    });
  }

}
