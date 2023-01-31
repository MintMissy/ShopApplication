import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BasketPageContainerComponent } from './feature/basket-page-container/basket-page-container.component';
import { ShopItemPageComponent } from './feature/shop-item-page/shop-item-page.component';
import { ShopPageContainerComponent } from './feature/shop-page-container/shop-page-container.component';
import { BasketItemListComponent } from './ui/basket-item-list/basket-item-list.component';
import { BasketItemComponent } from './ui/basket-item/basket-item.component';
import { PurchasePreviewComponent } from './ui/purchase-preview/purchase-preview.component';
import { SearchFiltersComponent } from './ui/search-filters/search-filters.component';
import { ShopItemCardComponent } from './ui/shop-item-card/shop-item-card.component';
import { StoreModule } from '@ngrx/store';
import * as fromShop from './state/shop.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ShopEffects } from './state/shop.effects';
import { SumUpBasketPricePipe } from './pipe/sum-up-basket-price.pipe';

@NgModule({
	declarations: [
		ShopItemCardComponent,
		BasketPageContainerComponent,
		ShopPageContainerComponent,
		SearchFiltersComponent,
		ShopItemPageComponent,
		BasketItemListComponent,
		BasketItemComponent,
		PurchasePreviewComponent,
  SumUpBasketPricePipe,
	],
	imports: [
		CommonModule,
		StoreModule.forFeature(fromShop.shopFeatureKey, fromShop.reducer),
		EffectsModule.forFeature([ShopEffects]),
	],
})
export class ShopModule {}
