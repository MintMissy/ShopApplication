import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './ui/footer/footer.component';
import { NavbarComponent } from './ui/navbar/navbar.component';

@NgModule({
	imports: [CommonModule, SharedModule, RouterModule],
	declarations: [NavbarComponent, FooterComponent],
	exports: [NavbarComponent, FooterComponent],
})
export class CoreModule {}
