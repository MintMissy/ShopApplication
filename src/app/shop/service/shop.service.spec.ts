import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ShopService } from './shop.service';

describe('ShopService', () => {
	let service: ShopService;
	let httpClient: HttpClient;
	let httpTestingController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		});

		httpClient = TestBed.inject(HttpClient);
		httpTestingController = TestBed.inject(HttpTestingController);
		service = TestBed.inject(ShopService);
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should return products list (one call)', (done: DoneFn) => {
		const expectedProductsList = {
			products: [
				{
					id: 1,
					title: 'iPhone 9',
					description: 'An apple mobile which is nothing like apple',
					price: 549,
					discountPercentage: 12.96,
					rating: 4.69,
					stock: 94,
					brand: 'Apple',
					category: 'smartphones',
					thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
					images: ['https://i.dummyjson.com/data/products/1/2.jpg'],
				},
			],
		};

		service.getAllProducts().subscribe({
			next: (productList) => {
				expect(productList).withContext('expected products list').toEqual(expectedProductsList);
				done();
			},
			error: done.fail,
		});

		const request = httpTestingController.expectOne(service.API_URL);
		expect(request.request.method).toEqual('GET');
		request.flush(expectedProductsList);
	});

	it('should return an error when the server returns 404', (done: DoneFn) => {
		const errorMessage = '404 error'

		service.getAllProducts().subscribe({
			next: (productsList) => done.fail('expected an error, not products list'),
			error: (error: HttpErrorResponse) => {
				expect(error.status).withContext('status').toEqual(404)
				expect(error.error).withContext('message').toEqual(errorMessage)
				done();
			},
		});

		const request = httpTestingController.expectOne(service.API_URL)
		request.flush(errorMessage, {status: 404, statusText: 'Not Found'})
	});
});
