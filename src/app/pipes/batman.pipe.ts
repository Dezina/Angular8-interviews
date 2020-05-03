import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'batman'
})
export class BatmanPipe implements PipeTransform {

  transform(data: any[]): any[] {
    if (!data) return [];
    return data.filter(it => {
      return it.hospital.includes('Batman Hospital');
    });
  }

}
