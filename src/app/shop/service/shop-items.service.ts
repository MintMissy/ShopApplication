import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ShopItemsService {
	private readonly API_URL = "https://dummyjson.com/products"

	constructor(private httpClient: HttpClient) {}

	getProduct(productId: string) {
		return this.httpClient.get(`${this.API_URL}/${productId}`);
	}

	getAllProducts() {
		return this.httpClient.get(this.API_URL);
	}
}
