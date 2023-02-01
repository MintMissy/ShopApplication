import { CommonModule, DecimalPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { CartPageComponent } from './feature/cart-page/cart-page.component';
import { ProductPageComponent } from './feature/product-page/product-page.component';
import { ProductsPageComponent } from './feature/products-page/products-page.component';
import { ProductPricePipe } from './pipe/product-price.pipe';
import { SumUpCartPipe } from './pipe/sum-up-cart.pipe';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopEffects } from './state/shop.effects';
import { ShopFacade } from './state/shop.facade';
import * as fromShop from './state/shop.reducer';
import { CartItemListComponent } from './ui/cart-item-list/cart-item-list.component';
import { CartItemComponent } from './ui/cart-item/cart-item.component';
import { ProductCardComponent } from './ui/product-card/product-card.component';
import { PurchasePreviewComponent } from './ui/purchase-preview/purchase-preview.component';
import { SearchFiltersComponent } from './ui/search-filters/search-filters.component';

@NgModule({
	declarations: [
		ProductCardComponent,
		CartPageComponent,
		ProductsPageComponent,
		SearchFiltersComponent,
		ProductPageComponent,
		CartItemListComponent,
		CartItemComponent,
		PurchasePreviewComponent,
		SumUpCartPipe,
		ProductPricePipe,
	],
	imports: [
		CommonModule,
		ShopRoutingModule,
		SharedModule,
		HttpClientModule,
		ReactiveFormsModule,
		FormsModule,
		StoreModule.forFeature(fromShop.shopFeatureKey, fromShop.reducer),
		EffectsModule.forFeature([ShopEffects]),
	],
	providers: [
		{
			provide: ShopFacade,
			useClass: ShopFacade,
		},
		DecimalPipe,
	],
})
export class ShopModule {}
