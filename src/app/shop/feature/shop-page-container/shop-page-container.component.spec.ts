import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPageContainerComponent } from './shop-page-container.component';

describe('ShopPageContainerComponent', () => {
	let component: ShopPageContainerComponent;
	let fixture: ComponentFixture<ShopPageContainerComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ShopPageContainerComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ShopPageContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
