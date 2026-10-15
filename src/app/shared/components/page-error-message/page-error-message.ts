import { Component, Input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  imports: [ButtonModule],
  selector: 'app-page-error-message',
  styleUrl: './page-error-message.css',
  templateUrl: './page-error-message.html',
})
export class PageErrorMessage {
  @Input() description: string = '';
  retry = output<void>();

  onRetry(): void {
    this.retry.emit();
  }
}
