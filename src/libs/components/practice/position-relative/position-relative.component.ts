import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'practice-position-relative',
	templateUrl: './position-relative.component.html',
	styleUrls: ['./position-relative.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PositionRelativeComponent {
	public htmlCode = `<div class="practice-position-relative-content">
	<div class="practice-position-relative-content-header">
		<strong>Контейнер - шапка</strong>
	</div>
	<div class="practice-position-relative-content-footer">
		<strong>Контейнер - колонтитул</strong>
	</div>
</div>`;

	public stylesCode = `.practice-position-relative-content {
	position: relative;
	width: 500px;
	height: 500px;

	.practice-position-relative-content-header {
		@include box-style(#324157);

		position: relative;
		top: 50px;
		right: 20px;
		bottom: 50px;
		left: 20px;
	}

	.practice-position-relative-content-footer {
		@include box-style(#438c5c);
		color: #464655;

		position: static;
		height: 200px;
		width: 200px;
	}
}`;
}
