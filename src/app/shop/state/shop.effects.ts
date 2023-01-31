import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import { catchError, map, switchMap } from 'rxjs/operators';
import { ShopItemsService } from '../service/shop-items.service';
import { ShopActions } from './shop.actions';

@Injectable()
export class ShopEffects {
	loadShops$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(ShopActions.loadProducts),
			/** An EMPTY observable only emits completion. Replace with your own observable API request */
			switchMap(() => {
				return this.shopItemsService.getAllProducts().pipe(
					map((response) => ShopActions.loadProductsSuccess({ products: response.products })),
					catchError(() => of(ShopActions.loadProductsFailed))
				);
			})
		);
	});

	constructor(private actions$: Actions, private shopItemsService: ShopItemsService) {}
}
