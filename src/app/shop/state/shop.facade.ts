import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShopActions } from './shop.actions';
import { selectProduct, selectProducts } from './shop.selectors';

@Injectable()
export class ShopFacade {
	products$ = this.store.select(selectProducts);

	constructor(private store: Store) {}

	updateSearchQuery(query: string) {}

	getProduct(productId: number) {
		return this.store.select(selectProduct(productId));
	}

	loadProducts() {
		this.store.dispatch(ShopActions.loadProducts({ category: '', query: '' }));
	}
}
