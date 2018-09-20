import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterText:string,propName:string): any {
    if(value.length === 0){
        return value;
    }

    const resultList = [];
    for (const item of value) {
        if (filterText === item[propName]) {

             resultList.push(item);
        }

    }
    return resultList;
  }

}
