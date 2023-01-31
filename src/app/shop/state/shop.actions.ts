import { createAction, createActionGroup, emptyProps } from '@ngrx/store';

export const loadShops = createAction('[Shop] Load Shops');

export const actionGroup = createActionGroup({
	source: 'Shop',
	events: {
		test: emptyProps(),
	},
});
