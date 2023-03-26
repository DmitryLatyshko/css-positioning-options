import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'code-container',
	templateUrl: './code-container.component.html',
	styleUrls: ['./code-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeContainerComponent {
	@Input()
	public elementTemplates: (HTMLElement | string)[] = [];

	public getTextCodeFromTemplate(template: HTMLElement | string): string {
		if (typeof template == 'string') {
			return template;
		}
		return template?.innerHTML.replace(' &nbsp; ', '\n') || 'No code.';
	}
}
