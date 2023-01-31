import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketPageContainerComponent } from './basket-page-container.component';

describe('BasketPageContainerComponent', () => {
	let component: BasketPageContainerComponent;
	let fixture: ComponentFixture<BasketPageContainerComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [BasketPageContainerComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(BasketPageContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
