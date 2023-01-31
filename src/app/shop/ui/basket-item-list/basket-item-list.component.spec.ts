import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketItemListComponent } from './basket-item-list.component';

describe('BasketItemListComponent', () => {
	let component: BasketItemListComponent;
	let fixture: ComponentFixture<BasketItemListComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [BasketItemListComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(BasketItemListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
