import { PageRoute } from '../models';

export class PageRouteRegistratorService {
	private static _pageRouteInfos = new Map<string, PageRoute>();

	public static get pageRouteInfos(): ReadonlyMap<string, PageRoute> {
		return this._pageRouteInfos;
	}

	public static register(route: PageRoute): void {
		PageRouteRegistratorService._pageRouteInfos.set(route.type, route);
	}

	public static get(name: string): PageRoute {
		const pageRoute = PageRouteRegistratorService._pageRouteInfos.get(name);
		if (!pageRoute) {
			throw new Error(`Error when resole ${name}. Type was not registered.`);
		}
		return pageRoute;
	}
}
