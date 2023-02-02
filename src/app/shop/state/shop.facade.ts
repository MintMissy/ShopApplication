import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../model/product.model';
import { CartItem } from '../model/shopping-cart.model';
import { SearchFilters } from '../ui/search-filters/search-filters.component';
import { ShopActions } from './shop.actions';
import {
	selectAmountInCart,
	selectCategories,
	selectItemsFromCart,
	selectProduct,
	selectProducts,
	selectProductsByCategory,
} from './shop.selectors';

@Injectable()
export class ShopFacade {
	products$ = this.store.select(selectProducts);
	categories$ = this.store.select(selectCategories);
	productsInCart$ = this.store.select(selectItemsFromCart);

	constructor(private store: Store) {}

	addToCart(cartItem: CartItem) {
		this.store.dispatch(ShopActions.upsertItemToCart(cartItem));
	}

	getProduct(productId: number) {
		return this.store.select(selectProduct(productId));
	}

	getAmountInCart(productId: number) {
		return this.store.select(selectAmountInCart(productId));
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

	removeItemFromCart(productId: number) {
		this.store.dispatch(ShopActions.removeItemFromCart({ productId: productId }));
	}

	updateItemInCard(product: Product, amount: number) {
		this.store.dispatch(ShopActions.upsertItemToCart({ product: product, amount: amount }));
	}
}
