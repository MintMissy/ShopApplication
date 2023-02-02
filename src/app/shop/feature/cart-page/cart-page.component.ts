import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Product } from '../../model/product.model';
import { CartItem } from '../../model/shopping-cart.model';
import { ShopFacade } from '../../state/shop.facade';

@Component({
	selector: 'app-cart-page',
	templateUrl: './cart-page.component.html',
	styleUrls: ['./cart-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartPageComponent {
onAmountChange($event: CartItem) {
throw new Error('Method not implemented.');
}
	productsInCart$ = this.shopFacade.productsInCart$;

	constructor(private shopFacade: ShopFacade) {}

	onProductRemove(productId: number) {
		this.shopFacade.removeProductFromCart(productId);
	}

	onProductUpdate(product: Product, amount: number) {
		this.shopFacade.updateProductInCard(product, amount);
	}
}
