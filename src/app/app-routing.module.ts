import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PositionAbsoluteComponent, PositionComponent } from '../libs';
import { AppHomeComponent } from './components';
import { PageRoute, PageRoutes } from './models';
import { MatIconsRegistratorService, PageRouteRegistratorService } from './services';

export const HOME_ROUTE: PageRoute = {
	type: 'app.Home',
	order: 0,
	icon: 'home',
	path: '',
	component: AppHomeComponent,
	pathMatch: 'full',
	title: 'Angular',
};

const routes: PageRoutes = [
	{
		type: 'practice.position',
		order: 0,
		icon: '',
		path: 'practice/position',
		component: PositionComponent,
		pathMatch: 'full',
		title: 'Position',
	},
	{
		type: 'practice.position-absolute',
		order: 1,
		icon: '',
		path: 'practice/position/absolute',
		component: PositionAbsoluteComponent,
		pathMatch: 'full',
		title: 'Position - Absolute',
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(
			[HOME_ROUTE, ...routes],
			{ scrollPositionRestoration: 'enabled', relativeLinkResolution: 'legacy' },
		),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {
	constructor(private readonly _matIconsRegistrator: MatIconsRegistratorService) {
		routes.forEach((route) => PageRouteRegistratorService.register(route));
		this._matIconsRegistrator.addIcons([HOME_ROUTE, ...routes].filter((route) => !!route.icon).map((route) => (
			{
				name: route.icon as string,
				icon: require(`!!raw-loader?{esModule:false}!../assets/${route.icon}.svg`),
			}
		)));
	}
}
