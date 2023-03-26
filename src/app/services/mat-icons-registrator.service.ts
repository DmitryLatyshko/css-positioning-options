import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Icon } from '../models';

@Injectable({
	providedIn: 'root',
})
export class MatIconsRegistratorService {
	constructor(private readonly _domSanitizer: DomSanitizer, private readonly _matIconRegistry: MatIconRegistry) {
	}

	public addIcons(icons: Icon[]): void {
		icons.forEach(({ name, icon }) => {
			const iconLiteral = this._domSanitizer.bypassSecurityTrustHtml(icon);
			this._matIconRegistry.addSvgIconLiteral(name, iconLiteral);
		})
	}
}
