import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioSectionComponent {}
