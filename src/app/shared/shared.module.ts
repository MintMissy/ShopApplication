import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CounterComponent } from './ui/counter/counter.component';
import { ImageCarouselComponent } from './ui/image-carousel/image-carousel.component';

@NgModule({
	declarations: [ImageCarouselComponent, CounterComponent],
	imports: [CommonModule, MaterialModule, FormsModule],
	exports: [MaterialModule, ImageCarouselComponent, CounterComponent],
})
export class SharedModule {}
