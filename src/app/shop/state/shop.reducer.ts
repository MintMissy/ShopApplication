import { createReducer } from '@ngrx/store';

export const shopFeatureKey = 'shop';

export interface ShopState {

}

export const initialState: ShopState = {

};

export const reducer = createReducer(
  initialState,
  // on(state => state),


);
