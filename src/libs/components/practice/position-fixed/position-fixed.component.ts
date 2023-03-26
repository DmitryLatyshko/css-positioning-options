import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'practice-position-static',
	templateUrl: './position-fixed.component.html',
	styleUrls: ['./position-fixed.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PositionFixedComponent {
	public htmlCode = `<div class="practice-position-fixed-content">
	<div class="practice-position-fixed-content-header">
		<strong>Контейнер - шапка</strong>
	</div>
	<div class="practice-position-fixed-content-footer">
		<strong>Контейнер - колонтитул</strong>
	</div>
</div>`;

	public stylesCode = `.practice-position-fixed-content {
	position: relative;
	width: 500px;
	height: 500px;

	.practice-position-fixed-content-header {
		@include box-style(#324157);

		position: fixed;
		top: 150px;
		right: 20px;
		//bottom: 50px;
		left: 20px;
	}

	.practice-position-fixed-content-footer {
		@include box-style(#438c5c);
		color: #464655;

		position: static;
		height: 200px;
		width: 200px;
	}
}`;
}
