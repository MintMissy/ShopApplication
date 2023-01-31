import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-shop-page-container',
	templateUrl: './shop-page-container.component.html',
	styleUrls: ['./shop-page-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopPageContainerComponent {}
