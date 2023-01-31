import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './ui/footer/footer.component';
import { NavbarComponent } from './ui/navbar/navbar.component';

@NgModule({
	declarations: [NavbarComponent, FooterComponent],
	imports: [CommonModule, MaterialModule],
})
export class SharedModule {}
