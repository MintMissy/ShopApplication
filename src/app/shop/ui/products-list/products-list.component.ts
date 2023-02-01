import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
	@Input() products: Product[] | undefined | null;

	trackProduct(index: number, product: Product) {
		return product.title;
	}
}
