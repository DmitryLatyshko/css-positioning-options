import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
	PositionAbsoluteComponent,
	PositionComponent, PositionFixedComponent,
	PositionRelativeComponent,
	PositionStaticComponent, PositionStickyComponent,
} from '../libs';
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
		type: 'practice.position-static',
		order: 1,
		icon: '',
		path: 'practice/position/static',
		component: PositionStaticComponent,
		pathMatch: 'full',
		title: 'Position - Static',
	},
	{
		type: 'practice.position-absolute',
		order: 2,
		icon: '',
		path: 'practice/position/absolute',
		component: PositionAbsoluteComponent,
		pathMatch: 'full',
		title: 'Position - Absolute',
	},
	{
		type: 'practice.position-relative',
		order: 3,
		icon: '',
		path: 'practice/position/relative',
		component: PositionRelativeComponent,
		pathMatch: 'full',
		title: 'Position - Relative',
	},
	{
		type: 'practice.position-fixed',
		order: 4,
		icon: '',
		path: 'practice/position/fixed',
		component: PositionFixedComponent,
		pathMatch: 'full',
		title: 'Position - Fixed',
	},
	{
		type: 'practice.position-sticky',
		order: 5,
		icon: '',
		path: 'practice/position/sticky',
		component: PositionStickyComponent,
		pathMatch: 'full',
		title: 'Position - Sticky',
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
