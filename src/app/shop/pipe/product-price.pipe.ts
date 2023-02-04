import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product.model';
import { getProductPrice } from '../utils/product.utils';

@Pipe({
	name: 'productPrice',
})
export class ProductPricePipe implements PipeTransform {
	constructor(private decimalPipe: DecimalPipe) {}

	transform(product: Product): string | null {
		return this.decimalPipe.transform(getProductPrice(product), '1.2-2');
	}
}
