import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-page-header',
  styleUrl: './page-header.css',
  templateUrl: './page-header.html',
})
export class PageHeader {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon: string = '';
}
