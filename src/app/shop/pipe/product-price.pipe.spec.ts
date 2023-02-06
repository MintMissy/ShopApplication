import { DecimalPipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { ProductPricePipe } from './product-price.pipe';

describe('ProductPricePipe', () => {
	let pipe: ProductPricePipe;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [DecimalPipe],
		});
		const decimalPipe = TestBed.get(DecimalPipe);
		pipe = new ProductPricePipe(decimalPipe);
	});

	it('create an instance', () => {
		expect(pipe).toBeTruthy();
	});
});
