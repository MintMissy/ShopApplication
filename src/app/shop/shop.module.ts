import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BasketPageContainerComponent } from './feature/basket-page-container/basket-page-container.component';
import { ShopItemCardComponent } from './ui/shop-item-card/shop-item-card.component';
import { ShopPageContainerComponent } from './feature/shop-page-container/shop-page-container.component';
import { SearchFiltersComponent } from './ui/search-filters/search-filters.component';
import { ShopItemPageComponent } from './feature/shop-item-page/shop-item-page.component';
import { BasketItemListComponent } from './ui/basket-item-list/basket-item-list.component';
import { BasketItemComponent } from './ui/basket-item/basket-item.component';
import { PurchasePreviewComponent } from './ui/purchase-preview/purchase-preview.component';

@NgModule({
	declarations: [ShopItemCardComponent, BasketPageContainerComponent, ShopPageContainerComponent, SearchFiltersComponent, ShopItemPageComponent, BasketItemListComponent, BasketItemComponent, PurchasePreviewComponent],
	imports: [CommonModule],
})
export class ShopModule {}
