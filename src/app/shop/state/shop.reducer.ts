import { createReducer, on } from '@ngrx/store';
import { Product } from '../model/product.model';
import { ShopActions } from './shop.actions';

export const shopFeatureKey = 'shop';

export interface ShopState {
	products: Product[];
	productsQuery: string;
}

export const initialState: ShopState = {
	products: [],
	productsQuery: '',
};

export const reducer = createReducer(
	initialState,
	on(ShopActions.loadProductsSuccess, (state, props): ShopState => {
		return { ...state, products: props.products };
	})
);
