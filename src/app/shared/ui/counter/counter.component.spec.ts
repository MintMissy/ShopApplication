import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { click, setFieldValue } from 'src/app/utils/test.utils';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
	let component: CounterComponent;
	let fixture: ComponentFixture<CounterComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MatIconModule, FormsModule],
			declarations: [CounterComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(CounterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should increment value', () => {
		const previousValue = component.value;

		click(fixture, 'increment');

		expect(previousValue + 1).toBe(component.value);
	});

	it('should decrement value', () => {
		component.value = 10;
		const previousValue = component.value;

		click(fixture, 'decrement');

		expect(previousValue - 1).toBe(component.value);
	});

	it('should allow editing value', () => {
		const newValue = 5;

		setFieldValue(fixture, 'input', newValue);

		expect(component.value).toBe(newValue);
	});

	it('should not allow entering value less than minimum', () => {
		component.minValue = 0;
		const newValue = -4;

		setFieldValue(fixture, 'input', newValue);

		expect(component.value).toBe(component.minValue);
	});

	it('should not allow entering value higher than maximum', () => {
		component.maxValue = 10;
		const newValue = 12;

		setFieldValue(fixture, 'input', newValue);

		expect(component.value).toBe(component.maxValue);
	});
});
