import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'web'
})
export class WebPipe implements PipeTransform {

  transform(data: any[], searchText: any): any[] {
    if (!data) return [];
    if (!searchText) return data;
    searchText = searchText.toLowerCase();
    return data.filter(it => {
      return it.username.includes(searchText);
    });
  }

}
