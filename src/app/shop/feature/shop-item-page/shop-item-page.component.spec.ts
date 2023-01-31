import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemPageComponent } from './shop-item-page.component';

describe('ShopItemPageComponent', () => {
	let component: ShopItemPageComponent;
	let fixture: ComponentFixture<ShopItemPageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ShopItemPageComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ShopItemPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
