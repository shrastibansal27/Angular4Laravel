import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUpper'
})
export class FirstUpperPipe implements PipeTransform {

  transform(value: any, args?: any): any {


    return  value.charAt(0).toUpperCase() + value.substring(1,value.length);
  }

}
