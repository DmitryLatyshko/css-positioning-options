import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'practice-position',
	templateUrl: './position.component.html',
	styleUrls: ['./position.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PositionComponent {}
