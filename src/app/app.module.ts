import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from '../libs';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppComponentsModule } from './components';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		CommonModule,
		BrowserModule,
		AppComponentsModule,
		AppRoutingModule,
		ComponentsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
}
