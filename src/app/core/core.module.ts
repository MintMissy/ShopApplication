import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { HttpErrorInterceptor } from './interceptor/http-error.interceptor';
import { FooterComponent } from './ui/footer/footer.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { NotFoundPageComponent } from './ui/not-found-page/not-found-page.component';

@NgModule({
	imports: [CommonModule, SharedModule, RouterModule, MaterialModule],
	declarations: [NavbarComponent, FooterComponent, NotFoundPageComponent],
	exports: [NavbarComponent, FooterComponent],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpErrorInterceptor,
			multi: true,
		},
	],
})
export class CoreModule {}
