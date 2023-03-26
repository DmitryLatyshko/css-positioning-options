import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './app-home.component.html',
	styleUrls: ['./app-home.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHomeComponent {
}
