import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Product } from '../../model/product.model';
import { ShopFacade } from '../../state/shop.facade';
import { SearchFilters } from '../../ui/search-filters/search-filters.component';

@Component({
	selector: 'app-products-page',
	templateUrl: './products-page.component.html',
	styleUrls: ['./products-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsPageComponent implements OnInit {
	products$ = this.shopFacade.products$;
	categories$ = this.shopFacade.categories$;
	productsInCart$ = this.shopFacade.productsInCart$.pipe(
		map((products) => {
			const productsObject: { [productId: number]: boolean } = {};
			products.forEach((product) => (productsObject[product.product.id] = true));
			return productsObject;
		})
	);

	constructor(private shopFacade: ShopFacade) {}

	ngOnInit(): void {
		this.shopFacade.loadCategories();
		this.shopFacade.loadProducts();
	}

	onFiltersApply(filters: SearchFilters) {
		this.shopFacade.updateFilters(filters);
	}

	onAddToCart(product: Product) {
		this.shopFacade.addToCart({ product: product, amount: 1 });
	}

	onRemoveFromCart(product: Product) {
		this.shopFacade.removeItemFromCart(product.id);
	}
}
