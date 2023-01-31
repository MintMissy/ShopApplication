import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
	@Input() product: Product = {
		id: 1,
		title: 'iPhone 9',
		description: 'An apple mobile which is nothing like apple',
		price: 549,
		discountPercentage: 12.96,
		rating: 4.69,
		stock: 94,
		brand: 'Apple',
		category: 'smartphones',
		thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
		images: [
			'https://i.dummyjson.com/data/products/1/1.jpg',
			'https://i.dummyjson.com/data/products/1/2.jpg',
			'https://i.dummyjson.com/data/products/1/3.jpg',
			'https://i.dummyjson.com/data/products/1/4.jpg',
			'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
		],
	};
}
