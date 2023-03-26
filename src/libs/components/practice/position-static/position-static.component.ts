import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'practice-position-static',
	templateUrl: './position-static.component.html',
	styleUrls: ['./position-static.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PositionStaticComponent {
	public htmlCode = `<div class="practice-position-static-content">
	<div class="practice-position-static-content-header">
		<strong>Контейнер - шапка</strong>
	</div>
	<div class="practice-position-static-content-footer">
		<strong>Контейнер - колонтитул</strong>
	</div>
</div>`;

	public stylesCode = `.practice-position-static-content {
	@include box-style(#6a8ac2);
	position: relative;
	width: 500px;
	height: 500px;

	.practice-position-static-content-header {
		@include box-style(#324157);

		position: static;
		width: 200px;
		height: 200px;
	}

	.practice-position-static-content-footer {
		@include box-style(#438c5c);
		color: #464655;

		position: static;
		width: 200px;
		height: 200px;
	}
}`
}
