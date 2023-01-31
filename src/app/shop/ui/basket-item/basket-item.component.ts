import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-basket-item',
	templateUrl: './basket-item.component.html',
	styleUrls: ['./basket-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketItemComponent {}
