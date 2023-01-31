import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-basket-item-list',
	templateUrl: './basket-item-list.component.html',
	styleUrls: ['./basket-item-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketItemListComponent {}
