import { NgModule } from '@angular/core';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

const materialModules = [
	MatButtonModule,
	MatIconModule,
	MatBadgeModule,
	MatToolbarModule,
	MatCardModule,
	MatMenuModule,
	MatChipsModule,
	MatSelectModule,
	MatInputModule,
	MatRippleModule,
	MatSnackBarModule
];

@NgModule({
	imports: [materialModules],
	exports: [materialModules],
})
export class MaterialModule {}
