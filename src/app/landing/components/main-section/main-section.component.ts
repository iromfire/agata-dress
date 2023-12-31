import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainSectionComponent {}
