import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeContainerComponent } from './base';

export const COMPONENTS: any[] = [];

@NgModule({
	declarations: [CodeContainerComponent, ...COMPONENTS],
	imports: [CommonModule],
	exports: [...COMPONENTS],
})
export class ComponentsModule {
}
