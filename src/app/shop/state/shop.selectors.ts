import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromShop from './shop.reducer';

export const selectShopState = createFeatureSelector<fromShop.ShopState>(fromShop.shopFeatureKey);

export const selectProducts = createSelector(selectShopState, (state) => {
	return state.products.filter((product) => product.title.startsWith(state.productsQuery));
});
