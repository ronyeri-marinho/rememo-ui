import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';

@Component({
  imports: [MenuModule, ButtonModule, RippleModule],
  selector: 'app-page-header',
  styleUrl: './page-header.css',
  templateUrl: './page-header.html',
})
export class PageHeader {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon: string = '';
  @Input() showMenu: boolean = false;
  @Input() menuItems: MenuItem[] = [];
}
