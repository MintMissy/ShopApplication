import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

type ProductsResponse = {
	products: Product[];
};

@Injectable({
	providedIn: 'root',
})
export class ShopService {
	readonly API_URL = 'https://dummyjson.com/products';

	constructor(private httpClient: HttpClient) {}

	getProduct(productId: string) {
		return this.httpClient.get<Product>(`${this.API_URL}/${productId}`);
	}

	getAllProducts() {
		return this.httpClient.get<ProductsResponse>(this.API_URL);
	}

	getProductsByQuery(query: string) {
		return this.httpClient.get<ProductsResponse>(`${this.API_URL}/search?q=${query}`);
	}

	getProductsByCategory(category: string) {
		return this.httpClient.get<ProductsResponse>(`${this.API_URL}/category/${category}`);
	}

	getCategories() {
		return this.httpClient.get<string[]>(`${this.API_URL}/categories`);
	}
}
