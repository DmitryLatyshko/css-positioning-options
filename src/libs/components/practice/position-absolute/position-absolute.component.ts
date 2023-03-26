import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'practice-position-absolute',
	templateUrl: './position-absolute.component.html',
	styleUrls: ['./position-absolute.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PositionAbsoluteComponent {
	public stylesCode = `.practice-position-absolute-wrapper {
	.practice-position-absolute-content {
		@include box-style(#6a8ac2);
		position: relative; // - not static
		width: 500px;
		height: 500px;

		.practice-position-absolute-content-header {
			@include box-style(#324157);

			position: absolute;
			top: 50px;
			right: 20px;
			bottom: 50px;
			left: 20px;
		}

		.practice-position-absolute-content-footer {
			@include box-style(#438c5c);
			color: #464655;

			position: static;
			height: 200px;
			width: 200px;
		}
	}
}`;
}
