import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CartPageComponent } from './feature/cart-page/cart-page.component';
import { ProductPageComponent } from './feature/product-page/product-page.component';
import { ProductsPageComponent } from './feature/products-page/products-page.component';
import { SumUpCartPipe } from './pipe/sum-up-cart.pipe';
import { ShopEffects } from './state/shop.effects';
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
	],
	imports: [
		CommonModule,
		StoreModule.forFeature(fromShop.shopFeatureKey, fromShop.reducer),
		EffectsModule.forFeature([ShopEffects]),
	],
})
export class ShopModule {}
