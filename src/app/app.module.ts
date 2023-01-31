import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppEffects } from './app.effects';
import { CoreModule } from './core/core.module';
import { metaReducers, reducers } from './state/app.state';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CoreModule,
		SharedModule,
		StoreModule.forRoot(reducers, { metaReducers }),
		EffectsModule.forRoot([AppEffects]),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
