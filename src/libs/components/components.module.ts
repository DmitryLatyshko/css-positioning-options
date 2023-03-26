import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeContainerComponent } from './base';
import {
	PositionAbsoluteComponent,
	PositionComponent,
	PositionFixedComponent,
	PositionRelativeComponent,
	PositionStaticComponent,
	PositionStickyComponent,
} from './practice';

export const COMPONENTS: any[] = [
	PositionComponent,
	PositionAbsoluteComponent,
	PositionFixedComponent,
	PositionRelativeComponent,
	PositionStaticComponent,
	PositionStickyComponent,
];

@NgModule({
	declarations: [CodeContainerComponent, ...COMPONENTS],
	imports: [CommonModule],
	exports: [...COMPONENTS],
})
export class ComponentsModule {
}
