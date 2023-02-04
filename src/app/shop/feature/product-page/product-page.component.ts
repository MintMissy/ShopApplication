import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { distinctUntilChanged, filter, map, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { CounterComponent } from '../../../shared/ui/counter/counter.component';
import { Product } from '../../model/product.model';
import { ShopFacade } from '../../state/shop.facade';
@Component({
	selector: 'app-product-page',
	templateUrl: './product-page.component.html',
	styleUrls: ['./product-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPageComponent implements OnInit, OnDestroy {
	similarProducts: Product[] = [];
	product: Product | undefined;

	destroy$ = new Subject<void>();
	amountInCart = 0;

	@ViewChild(CounterComponent) private counterComponent: CounterComponent | undefined;
	selectedCount = 0;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private shopFacade: ShopFacade,
		private changeDetector: ChangeDetectorRef
	) {}

	ngOnInit(): void {
		this.route.params
			.pipe(
				takeUntil(this.destroy$),
				map((params) => params['id']),
				tap((productId) => {
					if (productId === null) {
						this.router.navigate(['']);
					}
				}),
				filter((productId) => productId !== null),
				switchMap((productId) => this.shopFacade.getProduct(Number(productId))),
				distinctUntilChanged((previousProduct, currentProduct) => previousProduct?.id === currentProduct?.id),
				tap((product) => {
					if (product === undefined) {
						return;
					}
					this.product = product;
					this.shopFacade.loadProductsByCategory(product.category);

					this.shopFacade
						.getAmountInCart(this.product.id)
						.pipe(takeUntil(this.destroy$))
						.subscribe((amount) => {
							this.amountInCart = amount;
							this.counterComponent?.editValue(amount);
							this.changeDetector.markForCheck();
						});
				}),
				filter((product) => product !== undefined),
				switchMap((product) => this.shopFacade.getProductsByCategory(product!.category)),
				tap((similarProducts) => {
					this.similarProducts = similarProducts;
					this.changeDetector.markForCheck();
				})
			)
			.subscribe();
	}

	onProductCountChange(newCount: number) {
		this.selectedCount = newCount;

		if (this.amountInCart > 0) {
			this.onAddToCart();
		}
	}

	onAddToCart() {
		if (this.product !== undefined && this.selectedCount > 0) {
			this.shopFacade.addToCart({ amount: this.selectedCount, product: this.product });
		}
	}

	onRemoveFromCart() {
		if (this.product !== undefined) {
			this.shopFacade.removeItemFromCart(this.product.id);
			this.selectedCount = 0;
			this.counterComponent?.editValue(0);
		}
	}

	ngOnDestroy(): void {
		this.destroy$.next();
	}
}
