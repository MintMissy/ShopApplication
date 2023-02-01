import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product.model';

@Pipe({
	name: 'productPrice',
})
export class ProductPricePipe implements PipeTransform {
	constructor(private decimalPipe: DecimalPipe) {}

	transform(product: Product): string | null {
		return this.decimalPipe.transform(product.price * (100 - product.discountPercentage) * 0.01, '1.2-2');
	}
}
