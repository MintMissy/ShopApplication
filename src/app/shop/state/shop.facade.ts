import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShopActions } from './shop.actions';
import { selectProducts } from './shop.selectors';

@Injectable()
export class ShopFacade {
	products$ = this.store.select(selectProducts);

	constructor(private store: Store) {}

	updateSearchQuery(query: string) {}

	loadProducts() {
		this.store.dispatch(ShopActions.loadProducts({ category: '', query: '' }));
	}
}
