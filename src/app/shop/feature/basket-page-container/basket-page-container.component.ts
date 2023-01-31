import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-basket-page-container',
	templateUrl: './basket-page-container.component.html',
	styleUrls: ['./basket-page-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketPageContainerComponent {}
