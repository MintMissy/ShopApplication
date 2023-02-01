import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from '../model/product.model';
import { SearchFilters } from '../ui/search-filters/search-filters.component';

export const loadShops = createAction('[Shop] Load Shops');

export const ShopActions = createActionGroup({
	source: 'Shop',
	events: {
		test: emptyProps(),
		'Load Products': props<{ category: string; query: string }>(),
		'Load Products Success': props<{ products: Product[] }>(),
		'Load Products Failed': emptyProps(),
		'Load Product': props<{ category: string; query: string }>(),
		'Load Product Success': props<{ product: Product }>(),
		'Load Product Failed': emptyProps(),
		'Load Products By Category': props<{ category: string }>(),
		'Load Products By Category Success': props<{ products: Product[] }>(),
		'Load Products By Category Failed': emptyProps(),
		'Load Categories': emptyProps,
		'Load Categories Success': props<{ categories: string[] }>(),
		'Load Categories Failed': emptyProps(),
		'Update Filters': props<{newFilters: SearchFilters}>(),
	},
});
