import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';

@NgModule({
	declarations: [AppHeaderComponent, AppHomeComponent, AppNavigationComponent],
	imports: [CommonModule, MatIconModule, RouterModule],
	exports: [AppHeaderComponent],
})
export class AppComponentsModule {
}
