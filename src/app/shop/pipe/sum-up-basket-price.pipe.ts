import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumUpBasketPrice'
})
export class SumUpBasketPricePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
