import { createFeatureSelector } from '@ngrx/store';
import * as fromShop from './shop.reducer';

export const selectShopState = createFeatureSelector<fromShop.ShopState>(
  fromShop.shopFeatureKey
);
