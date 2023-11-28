import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionComponent {}
