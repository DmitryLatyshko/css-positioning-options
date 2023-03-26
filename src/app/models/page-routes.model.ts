import { Route } from '@angular/router';

export declare type PageRoutes = PageRoute[];

export declare interface PageRoute extends Route {
	readonly type: string;
	readonly order: number;
	readonly icon?: string;
}
