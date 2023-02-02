import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../model/shopping-cart.model';

@Component({
	selector: 'app-cart-item-list',
	templateUrl: './cart-item-list.component.html',
	styleUrls: ['./cart-item-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemListComponent {
	@Input() cartItems: CartItem[] | null = [];

	@Output() itemUpdate = new EventEmitter<CartItem>();
	@Output() itemRemove = new EventEmitter<number>();

	trackCartItem(index: number, cartItem: CartItem) {
		return cartItem.product.id;
	}

	onCartItemRemove(productId: number) {
		this.itemRemove.emit(productId);
	}

	onCartItemChange(cartItem: CartItem) {
		this.itemUpdate.emit(cartItem);
	}
}
