import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
	constructor(private snackBar: MatSnackBar) {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		return next.handle(request).pipe(
			catchError((error) => {
				let errorMessage = '';

				if (error.error instanceof ErrorEvent) {
					errorMessage = error.error.message;
				} else {
					errorMessage = `${error.status} ${error.message}`;
				}

				this.snackBar.open(`An error occurred: ${errorMessage}`, 'OK');

				return throwError(() => error);
			})
		);
	}
}
