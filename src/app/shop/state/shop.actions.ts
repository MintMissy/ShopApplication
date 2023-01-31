import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from '../model/product.model';

export const loadShops = createAction('[Shop] Load Shops');

export const ShopActions = createActionGroup({
	source: 'Shop',
	events: {
		test: emptyProps(),
		'Load Products': props<{ category: string; query: string }>(),
		'Load Products Success': props<{ products: Product[] }>(),
		'Load Products Failed': emptyProps(),
	},
});
