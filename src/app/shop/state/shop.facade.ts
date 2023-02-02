import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../model/product.model';
import { SearchFilters } from '../ui/search-filters/search-filters.component';
import { ShopActions } from './shop.actions';
import {
	selectCategories,
	selectProduct,
	selectProducts,
	selectProductsByCategory,
	selectProductsFromCart
} from './shop.selectors';

@Injectable()
export class ShopFacade {
	products$ = this.store.select(selectProducts);
	categories$ = this.store.select(selectCategories);
	productsInCart$ = this.store.select(selectProductsFromCart);

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

	removeProductFromCart(productId: number) {
		this.store.dispatch(ShopActions.removeProductFromCart({ productId: productId }));
	}

	updateProductInCard(product: Product, amount: number) {
		this.store.dispatch(ShopActions.upsertProductToCart({ product: product, amount: amount }));
	}
}
