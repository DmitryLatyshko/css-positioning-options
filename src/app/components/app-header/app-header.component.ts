import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HOME_ROUTE } from '../../app-routing.module';
import { PageRoute } from '../../models';

@Component({
	selector: 'app-header',
	templateUrl: './app-header.component.html',
	styleUrls: ['./app-header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeaderComponent {
	public home: PageRoute = HOME_ROUTE;
}
