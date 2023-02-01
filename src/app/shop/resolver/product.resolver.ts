import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, EMPTY, map, Observable, of, take } from 'rxjs';
import { Product } from '../model/product.model';
import { ShopService } from '../service/shop.service';
import { ShopActions } from '../state/shop.actions';
import { selectProduct } from '../state/shop.selectors';

@Injectable({
	providedIn: 'root',
})
export class ProductResolver implements Resolve<Product | null> {
	constructor(private shopItemsService: ShopService, private store: Store, private router: Router) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product | null> {
		const productId = route.paramMap.get('id');
		let alreadyLoaded: Product | undefined;

		if (productId === null) {
			this.router.navigate(['']);
			return of(null);
		}

		this.store
			.select(selectProduct(+productId))
			.pipe(take(1))
			.subscribe((product) => {
				alreadyLoaded = product;
			});

		if (alreadyLoaded !== undefined) {
			return of(null);
		}

		return this.shopItemsService.getProduct(productId).pipe(
			catchError(() => {
				this.router.navigate(['']);
				return EMPTY;
			}),
			map((product) => {
				this.store.dispatch(ShopActions.loadProductSuccess({ product: product }));
				return product;
			})
		);
	}
}
