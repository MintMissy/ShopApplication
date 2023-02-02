import { Product } from './product.model';

export type CartItem = {
	product: Product;
	amount: number;
};

export type ShoppingCart = {
	products: {
		[productId: string]: CartItem;
	};
};
