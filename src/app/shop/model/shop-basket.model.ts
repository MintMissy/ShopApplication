import { Product } from './product.model';

export type CartItem = {
	item: Product;
	amount: number;
};

export type ShopCart = {
	items: {
		[itemId: string]: CartItem;
	};
};
