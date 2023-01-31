import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()
export class ShopFacade {
	constructor(private store: Store) {}
}
