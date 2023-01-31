import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-shop-item-card',
	templateUrl: './shop-item-card.component.html',
	styleUrls: ['./shop-item-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopItemCardComponent {}
