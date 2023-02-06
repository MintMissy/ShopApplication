import { createFeatureSelector, createSelector } from '@ngrx/store';
import { applyProductFilters, sortProductList } from '../utils/product.utils';
import * as fromShop from './shop.reducer';

export const selectShopState = createFeatureSelector<fromShop.ShopState>(fromShop.shopFeatureKey);

export const selectProducts = createSelector(selectShopState, (state) => {
	let products = state.products;
	const searchFilters = state.searchFilters;

	products = applyProductFilters(searchFilters, products);
	products = sortProductList(searchFilters, [...products]);

	return products;
});

export const selectProductsByCategory = (category: string) => {
	return createSelector(selectShopState, (state) => {
		let products = state.products;
		const searchFilters = {
			category: category,
			minPrice: null,
			maxPrice: null,
			productName: null,
			sortingType: null,
		};

		products = applyProductFilters(searchFilters, products);

		return products;
	});
};

export const selectProduct = (productId: number) => {
	return createSelector(selectShopState, (state) => {
		return state.products.find((product) => product.id === productId);
	});
};

export const selectCategories = createSelector(selectShopState, (state) => {
	return state.categories;
});

export const selectAmountInCart = (productId: number) => {
	return createSelector(selectShopState, (state) => {
		const products = state.shoppingCart.products;
		return !Object.hasOwn(products, productId) ? 0 : products[productId].amount
	})
}

export const selectItemsFromCart = createSelector(selectShopState, (state) => {
	return Object.values(state.shoppingCart.products);
});

export const selectProductFromCart = (productId: number) => {
	return createSelector(selectShopState, (state) => {
		return state.shoppingCart.products[productId];
	});
};
