import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
	@Input() product: Product | undefined;
	@Input() isInCart: boolean | undefined;
	@Output() addToCart = new EventEmitter<Product>();
	@Output() removeFromCart = new EventEmitter<Product>();

	onAddToCard() {
		this.addToCart.emit(this.product);
	}

	onRemoveFromCard() {
		this.removeFromCart.emit(this.product);
	}
}
