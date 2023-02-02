import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../model/product.model';
import { CartItem } from '../../model/shopping-cart.model';

@Component({
	selector: 'app-cart-item-list',
	templateUrl: './cart-item-list.component.html',
	styleUrls: ['./cart-item-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemListComponent {
	@Input() cartItems: CartItem[] | null = [];

	@Output() amountChange = new EventEmitter<CartItem>();
	@Output() productRemove = new EventEmitter<number>();

	trackCartItem(index: number, cartItem: CartItem) {
		return cartItem.product.id;
	}

	onProductRemove(productId: number) {
		this.productRemove.emit(productId);
	}

	onAmountChange(cartItem: CartItem) {
		this.amountChange.emit(cartItem);
	}
}
