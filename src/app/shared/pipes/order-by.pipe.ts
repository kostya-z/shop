import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(values: any[], key: string, isAsc: boolean = true): any[] | undefined {

    if(!values) {
      return values;
    }

    const sortedValues = [...values].sort((a: any, b: any) => {
      if ( a[key] < b[key] ){
        return -1;
      }
      if ( a[key] > b[key] ){
        return 1;
      }
      return 0;
    });

    return isAsc ? sortedValues : sortedValues.reverse();
  }

}
