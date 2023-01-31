import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-cart-item-list',
	templateUrl: './cart-item-list.component.html',
	styleUrls: ['./cart-item-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemListComponent {}
