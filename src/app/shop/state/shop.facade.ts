import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShopActions } from './shop.actions';
import { selectCategories, selectProduct, selectProducts } from './shop.selectors';

@Injectable()
export class ShopFacade {
	products$ = this.store.select(selectProducts);
	categories$ = this.store.select(selectCategories);

	constructor(private store: Store) {}

	updateSearchQuery(query: string) {}

	getProduct(productId: number) {
		return this.store.select(selectProduct(productId));
	}

	loadProducts() {
		this.store.dispatch(ShopActions.loadProducts({ category: '', query: '' }));
	}

	loadCategories() {
		this.store.dispatch(ShopActions.loadCategories());
	}
}
