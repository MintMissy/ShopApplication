import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Product } from '../model/product.model';

type ProductsResponse = {
	products: Product[]
}

@Injectable({
	providedIn: 'root',
})
export class ShopItemsService {
	private readonly API_URL = 'https://dummyjson.com/products';

	constructor(private httpClient: HttpClient) {}

	getProduct(productId: string) {
		return this.httpClient
			.get<Product>(`${this.API_URL}/${productId}`)
			.pipe(catchError((error) => this.handleError(error)));
	}

	getAllProducts() {
		return this.httpClient.get<ProductsResponse>(this.API_URL).pipe(catchError((error) => this.handleError(error)));
	}

	getProductsByQuery(query: string) {
		return this.httpClient
			.get<ProductsResponse>(`${this.API_URL}/search?q=${query}`)
			.pipe(catchError((error) => this.handleError(error)));
	}

	getProductsByCategory(category: string) {
		return this.httpClient
			.get<ProductsResponse>(`${this.API_URL}/category/${category}`)
			.pipe(catchError((error) => this.handleError(error)));
	}

	getCategories() {
		return this.httpClient.get(`${this.API_URL}/categories`).pipe(catchError((error) => this.handleError(error)));
	}

	private handleError(error: any) {
		console.log(error);
		return throwError(() => error.message);
	}
}
