import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShopFacade } from 'src/app/shop/state/shop.facade';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
	itemsInCart$ = this.shopFacade.productsInCart$;

	constructor(private shopFacade: ShopFacade) {
		
	}
}
