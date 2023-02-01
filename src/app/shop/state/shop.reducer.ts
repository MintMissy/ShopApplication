import { createReducer, on } from '@ngrx/store';
import { Product } from '../model/product.model';
import { SearchFilters } from '../ui/search-filters/search-filters.component';
import { ShopActions } from './shop.actions';

export const shopFeatureKey = 'shop';

export interface ShopState {
	products: Product[];
	searchFilters: SearchFilters;
	categories: string[];
}

export const initialState: ShopState = {
	products: [],
	searchFilters: {
		category: null,
		minPrice: null,
		maxPrice: null,
		productName: null,
		sortingType: null,
	},
	categories: [],
};

export const reducer = createReducer(
	initialState,
	on(ShopActions.loadProductsSuccess, ShopActions.loadProductsByCategorySuccess, (state, props): ShopState => {
		return { ...state, products: props.products };
	}),
	on(ShopActions.loadProductSuccess, (state, props): ShopState => {
		return { ...state, products: [...state.products, props.product] };
	}),
	on(ShopActions.loadCategoriesSuccess, (state, props): ShopState => {
		return { ...state, categories: props.categories };
	}),
	on(ShopActions.updateFilters, (state, props): ShopState => {
		return { ...state, searchFilters: props.newFilters };
	})
);
