import { Component, Input } from '@angular/core';
import { Card } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  imports: [Card, AvatarModule, TooltipModule],
  selector: 'app-page-card-stat',
  styleUrl: './page-card-stat.css',
  templateUrl: './page-card-stat.html',
})
export class PageCardStat {
  @Input() cardTitle: string = '';
  @Input() value: string = '';
  @Input() helpText: string = '';
}
