import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeContainerComponent } from './base';
import { PositionAbsoluteComponent, PositionComponent } from './practice';

export const COMPONENTS: any[] = [
	PositionComponent,
	PositionAbsoluteComponent,
];

@NgModule({
	declarations: [CodeContainerComponent, ...COMPONENTS],
	imports: [CommonModule],
	exports: [...COMPONENTS],
})
export class ComponentsModule {
}
