import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'practice-position-sticky',
	templateUrl: './position-sticky.component.html',
	styleUrls: ['./position-sticky.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PositionStickyComponent {
	public htmlCode = `<div class="practice-position-sticky-content">
	<div class="practice-position-sticky-content-header">
		<strong>Контейнер - шапка</strong>
	</div>
	<div class="practice-position-sticky-content-footer">
		<strong>Контейнер - колонтитул</strong>
	</div>
</div>`;

	public stylesCode = `.practice-position-sticky-content {
	@include box-style(#6a8ac2);
	position: relative;
	width: 500px;
	height: 500px;

	.practice-position-sticky-content-header {
		@include box-style(#324157);

		position: sticky;
		top: 150px;
	}

	.practice-position-sticky-content-footer {
		@include box-style(#438c5c);
		color: #464655;

		position: static;
		height: 200px;
		width: 200px;
	}
}`;
}
