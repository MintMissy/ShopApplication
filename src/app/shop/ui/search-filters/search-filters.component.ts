import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export type SearchFilters = {
	category: string;
	minPrice: number;
	maxPrice: number;
	productName: string;
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
}
