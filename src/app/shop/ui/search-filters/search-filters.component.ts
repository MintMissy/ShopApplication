import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export type SearchFilters = {
	category: string | null;
	minPrice: number | null;
	maxPrice: number | null;
	productName: string | null;
};

@Component({
	selector: 'app-search-filters',
	templateUrl: './search-filters.component.html',
	styleUrls: ['./search-filters.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFiltersComponent {
	@Input() categories: string[] | null | undefined;
	@Output() filtersApply = new EventEmitter<SearchFilters>();

	filtersForm = this.fb.group(
		{
			category: [null, []],
			minPrice: [null, [Validators.min(0)]],
			maxPrice: [null, [Validators.min(0)]],
			productName: [null, []],
		},
		{ validators: [invalidPricesValidator] } as AbstractControlOptions
	);

	onSubmit() {
		if (!this.filtersForm.valid) {
			return;
		}
		this.filtersApply.emit(this.filtersForm.value as SearchFilters);
	}

	get category() {
		return this.filtersForm.get('category') as FormControl<string | null>;
	}

	get minPrice() {
		return this.filtersForm.get('minPrice');
	}

	get maxPrice() {
		return this.filtersForm.get('maxPrice');
	}

	get productName() {
		return this.filtersForm.get('productName');
	}

	constructor(private fb: FormBuilder) {}
}

/**
 * This validator returns an error when maximum price is lower than minimum price
 */
function invalidPricesValidator(formGroup: FormGroup) {
	const minPrice = formGroup.get('minPrice');
	const maxPrice = formGroup.get('maxPrice');

	if (minPrice === null || maxPrice === null) {
		return { invalidPrices: true };
	}
	if (!(minPrice.value !== null && maxPrice.value !== null)) {
		return null;
	}
	if (minPrice.value <= maxPrice.value) {
		return null;
	}

	return { invalidPrices: true };
}
