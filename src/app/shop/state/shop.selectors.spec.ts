import * as fromShop from './shop.reducer';
import { selectShopState } from './shop.selectors';

describe('Shop Selectors', () => {
	it('should select the feature state', () => {
		const result = selectShopState({
			[fromShop.shopFeatureKey]: {},
		});

		expect(result).toEqual({});
	});
});
