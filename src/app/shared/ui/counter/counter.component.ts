import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-counter',
	templateUrl: './counter.component.html',
	styleUrls: ['./counter.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit {
	@Input() startValue = 1;
	@Input() minValue = 0;
	@Input() maxValue = 99;
	@Output() valueChange = new EventEmitter<number>();

	value = 0;

	ngOnInit(): void {
		this.value = this.startValue;
	}

	editValue(newValue: number) {
		if (newValue < this.minValue) {
			newValue = this.minValue;
		} else if (newValue > this.maxValue) {
			newValue = this.maxValue;
		}

		this.value = newValue;
		this.valueChange.emit(this.value);
	}

	onDecrement() {
		this.editValue(this.value - 1);
	}

	onIncrement() {
		this.editValue(this.value + 1);
	}

	onValueChange(newValue: number) {
		this.editValue(newValue);
	}
}
