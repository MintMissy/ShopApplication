import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
	@Input() products: Product[] | undefined | null;
	@Input() productsInCart: { [index: number]: boolean } | undefined | null;
	@Output() addToCart = new EventEmitter<Product>();
	@Output() removeFromCart = new EventEmitter<Product>();

	trackProduct(index: number, product: Product) {
		return product.title;
	}

	onAddToCard(product: Product) {
		this.addToCart.emit(product);
	}

	onRemoveFromCard(product: Product) {
		this.removeFromCart.emit(product);
	}
}
