import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ImageCarouselComponent } from './ui/image-carousel/image-carousel.component';

@NgModule({
	declarations: [ImageCarouselComponent],
	imports: [CommonModule, MaterialModule],
	exports: [MaterialModule, ImageCarouselComponent],
})
export class SharedModule {}
