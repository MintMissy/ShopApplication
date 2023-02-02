import { createReducer, on } from '@ngrx/store';
import { Product } from '../model/product.model';
import { CartItem, ShoppingCart } from '../model/shopping-cart.model';
import { SearchFilters } from '../ui/search-filters/search-filters.component';
import { ShopActions } from './shop.actions';

export const shopFeatureKey = 'shop';

export interface ShopState {
	products: Product[];
	searchFilters: SearchFilters;
	categories: string[];
	shoppingCart: ShoppingCart;
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
	shoppingCart: {
		products: {},
	},
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
	}),
	on(ShopActions.upsertItemToCart, (state, props): ShopState => {
		const shoppingCart = { ...state.shoppingCart };
		const cartItem: CartItem = { product: props.product, amount: props.amount };

		shoppingCart.products[props.product.id] = cartItem;

		return { ...state, shoppingCart: shoppingCart };
	}),
	on(ShopActions.removeItemFromCart, (state, props): ShopState => {
		const shoppingCart = { ...state.shoppingCart };
		delete shoppingCart.products[props.productId];

		return { ...state, shoppingCart: shoppingCart };
	})
);
