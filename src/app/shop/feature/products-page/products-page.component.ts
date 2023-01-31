import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../model/product.model';
import { ShopFacade } from '../../state/shop.facade';

@Component({
	selector: 'app-products-page',
	templateUrl: './products-page.component.html',
	styleUrls: ['./products-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsPageComponent implements OnInit {
	products$: Observable<Product[]> = this.shopFacade.products$;

	constructor(private shopFacade: ShopFacade) {}

	ngOnInit(): void {
		this.shopFacade.loadProducts()
	}

	trackProduct(index: number, product: Product) {
		return product.title;
	}
}
