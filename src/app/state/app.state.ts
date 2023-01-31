import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromShop from '../shop/state/shop.reducer';

export interface AppState {
	[fromShop.shopFeatureKey]: fromShop.ShopState;
}

export const reducers: ActionReducerMap<AppState> = {
	[fromShop.shopFeatureKey]: fromShop.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
