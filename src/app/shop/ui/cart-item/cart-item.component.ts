import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../model/shopping-cart.model';

@Component({
	selector: 'app-cart-item',
	templateUrl: './cart-item.component.html',
	styleUrls: ['./cart-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
	@Input() cartItem: CartItem | undefined | null;

	@Output() itemUpdate = new EventEmitter<CartItem>();
	@Output() itemRemove = new EventEmitter<number>();

	get product() {
		return this.cartItem?.product;
	}

	onAmountChange(newAmount: number) {
		if (this.cartItem) {
			this.itemUpdate.emit({ ...this.cartItem, amount: newAmount });
		}
	}

	onDeleteItem() {
		this.itemRemove.emit(this.cartItem?.product.id);
	}
}
