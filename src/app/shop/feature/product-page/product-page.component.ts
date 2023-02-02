import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
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
	similarProducts$: Observable<Product[] | undefined> | undefined;

	product$: Observable<Product | undefined> | undefined;
	product: Product | undefined;

	destroy$ = new Subject<void>();
	amountInCart = 0;

	@ViewChild(CounterComponent) private counterComponent: CounterComponent | undefined;
	selectedCount = 0;

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
				this.product = product;
				this.shopFacade.loadProductsByCategory(product.category);
				this.similarProducts$ = this.shopFacade.getProductsByCategory(product.category);

				this.shopFacade
					.getAmountInCart(this.product.id)
					.pipe(takeUntil(this.destroy$))
					.subscribe((amount) => {
						this.amountInCart = amount;
						this.counterComponent?.editValue(amount);
						// TODO fix bug
					});
			});
		});
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
