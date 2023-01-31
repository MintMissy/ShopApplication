import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './feature/cart-page/cart-page.component';
import { ProductPageComponent } from './feature/product-page/product-page.component';
import { ProductsPageComponent } from './feature/products-page/products-page.component';
import { ProductResolver } from './resolver/product.resolver';

const routes: Routes = [
	{ path: '', component: ProductsPageComponent },
	{ path: 'product/:id', component: ProductPageComponent, resolve: { product: ProductResolver } },
	{ path: 'cart', component: CartPageComponent },
];

@NgModule({
	imports: [CommonModule, RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ShopRoutingModule {}
