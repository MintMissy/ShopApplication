import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Product } from '../../model/product.model';
import { ShopFacade } from '../../state/shop.facade';

@Component({
	selector: 'app-product-page',
	templateUrl: './product-page.component.html',
	styleUrls: ['./product-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPageComponent implements OnInit, OnDestroy {
	similarProducts$: Observable<Product[] | undefined> | undefined;
	product$: Observable<Product | undefined> | undefined;
	destroy$ = new Subject<void>();

	constructor(private route: ActivatedRoute, private router: Router, private shopFacade: ShopFacade) {}

	ngOnInit(): void {
		// If you know how to fix this subscription hell let me know.
		// I can't find any solution for this one in my head
		this.route.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
			const productId = params['id'];
			
			if (productId === null) {
				this.router.navigate(['']);
				return;
			}
			this.product$ = this.shopFacade.getProduct(+productId);

			this.product$.pipe(takeUntil(this.destroy$)).subscribe((product) => {
				if (product === undefined) {
					return;
				}
				this.shopFacade.loadProductsByCategory(product.category);
				this.similarProducts$ = this.shopFacade.getProductsByCategory(product.category);
			});
		});
	}

	ngOnDestroy(): void {
		this.destroy$.next()
	}
}
