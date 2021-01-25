import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data: any[], finaldata: string): any[] {
    if (!data) return [];

    // finaldata = finaldata.toLowerCase();
    return data.filter(it => {
      // return it.x.toLowerCase().includes(finaldata);
      // return it.data.includes('finaldata')
      return data.filter(item => item.x.includes(finaldata));

    });
  }

  // transform(items: any[], filter: Object): any {
  //   if (!items || !filter) {
  //     return items;
  //   }
  //   // filter items array, items which match and return true will be
  //   // kept, false will be filtered out
  //   return items.filter(item => item.title.indexOf(filter.title) !== -1);
  // }

}
