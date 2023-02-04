import { SearchFilters } from "../ui/search-filters/search-filters.component";
import { Product } from "c:/Projects/Programming/Web/ShopApplication/src/app/shop/model/product.model";

export function sortProductList(searchFilters: SearchFilters, products: import("c:/Projects/Programming/Web/ShopApplication/src/app/shop/model/product.model").Product[]) {
	switch (searchFilters.sortingType) {
		case 'CategoryAscending':
			products = products.sort((productA, productB) => (productA.category > productB.category ? 1 : -1));
			break;
		case 'CategoryDescending':
			products = products.sort((productA, productB) => (productA.category > productB.category ? 1 : -1));
			break;
		case 'MaximumPrice':
			products = products.sort((productA, productB) => (getProductPrice(productA) < getProductPrice(productB) ? 1 : -1));
			break;
		case 'MinimumPrice':
			products = products.sort((productA, productB) => (getProductPrice(productA) > getProductPrice(productB) ? 1 : -1));
			break;
		case 'NameAscending':
			products = products.sort((productA, productB) => (productA.title > productB.title ? 1 : -1));
			break;
		case 'NameDescending':
			products = products.sort((productA, productB) => (productA.title < productB.title ? 1 : -1));
			break;
	}
	return products;
}

export function applyProductFilters(searchFilters: SearchFilters, products: Product[]) {
	const category = searchFilters.category;
	const productName = searchFilters.productName;
	const minPrice = searchFilters.minPrice;
	const maxPrice = searchFilters.maxPrice;

	if (category !== null) {
		products = products.filter((product) => product.category === category);
	}
	if (productName !== null) {
		products = products.filter((product) => product.title.startsWith(productName));
	}
	if (minPrice !== null) {
		products = products.filter((product) => product.price >= minPrice);
	}
	if (maxPrice !== null) {
		products = products.filter((product) => product.price <= maxPrice);
	}
	return products;
}

/**
 * Gets product price after applying discounts
 * @param product 
 */
export function getProductPrice(product: Product) {
	return product.price * (100 - product.discountPercentage) * 0.01
}