import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../model/product.model';
import { ShopFacade } from '../../state/shop.facade';

@Component({
	selector: 'app-product-page',
	templateUrl: './product-page.component.html',
	styleUrls: ['./product-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPageComponent implements OnInit {
	product$: Observable<Product | undefined> | undefined;

	constructor(private route: ActivatedRoute, private router: Router, private shopFacade: ShopFacade) {}

	ngOnInit(): void {
		const productId = this.route.snapshot.paramMap.get('id');
		if (productId === null) {
			this.router.navigate(['']);
			return;
		}
		this.product$ = this.shopFacade.getProduct(+productId);
	}
}
