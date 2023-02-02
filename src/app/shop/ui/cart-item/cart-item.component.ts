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
	
	@Output() amountChange = new EventEmitter<CartItem>();
	@Output() productRemove = new EventEmitter<number>();
}
