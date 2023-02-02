import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartItem } from '../../model/shopping-cart.model';
import { ShopFacade } from '../../state/shop.facade';

@Component({
	selector: 'app-cart-page',
	templateUrl: './cart-page.component.html',
	styleUrls: ['./cart-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartPageComponent {
	productsInCart$ = this.shopFacade.productsInCart$;

	constructor(private shopFacade: ShopFacade) {}

	onCartItemRemove(productId: number) {
		this.shopFacade.removeItemFromCart(productId);
	}

	onCartItemUpdate(cartItem: CartItem) {
		this.shopFacade.updateItemInCard(cartItem.product, cartItem.amount);
	}
}
