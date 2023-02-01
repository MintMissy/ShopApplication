import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-image-carousel',
	templateUrl: './image-carousel.component.html',
	styleUrls: ['./image-carousel.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageCarouselComponent {
	@Input() images: string[] = [
		'https://i.dummyjson.com/data/products/2/1.jpg',
		'https://i.dummyjson.com/data/products/2/2.jpg',
		'https://i.dummyjson.com/data/products/2/3.jpg',
		'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
	];
	currentIndex = 0;

	get previousImage(): string {
		if (this.images === undefined) {
			return '';
		}

		const index = this.currentIndex - 1 < 0 ? this.images.length - 1 : this.currentIndex - 1;
		return this.images[index];
	}

	get currentImage(): string {
		return this.images === undefined ? '' : this.images[this.currentIndex];
	}

	get nextImage(): string {
		if (this.images === undefined) {
			return '';
		}

		const index = this.currentIndex + 1 >= this.images.length ? 0 : this.currentIndex + 1;
		return this.images[index];
	}

	onSlideNext() {
		this.currentIndex++;
		if (this.currentIndex >= this.images.length) {
			this.currentIndex = 0;
		}
	}

	onSlidePrevious() {
		this.currentIndex--;
		if (this.currentIndex < 0) {
			this.currentIndex = this.images.length - 1;
		}
	}

	selectImage(index: number) {
		this.currentIndex = index;
	}

	onMouseOver(index: number) {
		this.selectImage(index);
	}
}
