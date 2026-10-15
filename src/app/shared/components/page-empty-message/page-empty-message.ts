import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-page-empty-message',
  styleUrl: './page-empty-message.css',
  templateUrl: './page-empty-message.html',
})
export class PageEmptyMessage {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
