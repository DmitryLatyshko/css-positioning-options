import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PageRouteRegistratorService } from '../../services';

interface NavigationItem {
	caption: string;
	routerLink: string;
	icon?: string;
}

@Component({
	selector: 'app-navigation',
	templateUrl: 'app-navigation.component.html',
	styleUrls: ['./app-navigation.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppNavigationComponent implements OnInit {
	public isOpen = false;
	public navigationItems: NavigationItem[] = [];
	
	public get isNavigationItemsExist(): boolean {
		return this.navigationItems.length > 0;
	}

	private _setupNavigationItems(): void {
		this.navigationItems = Array.from(PageRouteRegistratorService.pageRouteInfos.values())
			.sort((route) => route.order)
			.map((route) => (
				{
					caption: route.title,
					routerLink: `/${route.path}`,
					icon: route.icon,
				} as NavigationItem
			));
	}

	public ngOnInit(): void {
		this._setupNavigationItems();
	}

	public toogle(): void {
		this.isOpen = !this.isOpen;
	}
}
