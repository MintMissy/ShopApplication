import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SearchFilters } from '../ui/search-filters/search-filters.component';
import { ShopActions } from './shop.actions';
import { selectCategories, selectProduct, selectProducts, selectProductsByCategory } from './shop.selectors';

@Injectable()
export class ShopFacade {
	products$ = this.store.select(selectProducts);
	categories$ = this.store.select(selectCategories);

	constructor(private store: Store) {}

	getProduct(productId: number) {
		return this.store.select(selectProduct(productId));
	}

	getProductsByCategory(category: string) {
		return this.store.select(selectProductsByCategory(category));
	}

	loadProducts() {
		this.store.dispatch(ShopActions.loadProducts({ category: '', query: '' }));
	}

	loadCategories() {
		this.store.dispatch(ShopActions.loadCategories());
	}

	loadProductsByCategory(category: string) {
		return this.store.dispatch(ShopActions.loadProductsByCategory({ category: category }));
	}

	updateFilters(filters: SearchFilters) {
		this.store.dispatch(ShopActions.updateFilters({ newFilters: filters }));
	}
}
