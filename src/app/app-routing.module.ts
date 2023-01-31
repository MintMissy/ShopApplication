import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './core/ui/not-found-page/not-found-page.component';

const routes: Routes = [
	{ path: '', loadChildren: () => import('./shop/shop.module').then((m) => m.ShopModule) },
	{ path: '**', component: NotFoundPageComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
