import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumUpCart'
})
export class SumUpCartPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
