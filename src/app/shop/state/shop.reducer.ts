import { createReducer, on } from '@ngrx/store';
import { Product } from '../model/product.model';
import { ShopActions } from './shop.actions';

export const shopFeatureKey = 'shop';

export interface ShopState {
	products: Product[];
	productsQuery: string;
	categories: string[];
}

export const initialState: ShopState = {
	products: [],
	productsQuery: '',
	categories: [],
};

export const reducer = createReducer(
	initialState,
	on(ShopActions.loadProductsSuccess, (state, props): ShopState => {
		return { ...state, products: props.products };
	}),
	on(ShopActions.loadProductSuccess, (state, props): ShopState => {
		return { ...state, products: [...state.products, props.product] };
	}),
	on(ShopActions.loadCategoriesSuccess, (state, props): ShopState => {
		return { ...state, categories: props.categories };
	})
);
