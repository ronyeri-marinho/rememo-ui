import { Component, Input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Card } from 'primeng/card';

@Component({
  imports: [Card, ButtonModule],
  selector: 'app-deck-flashcard',
  styleUrl: './deck-flashcard.css',
  templateUrl: './deck-flashcard.html',
})
export class DeckFlashcard {
  @Input() question: string = '';
  @Input() answer: string = '';
  @Input() id: string = '';

  update = output<string>();
  delete = output<string>();

  onEdit() {
    this.update.emit(this.id);
  }

  onDelete() {
    this.delete.emit(this.id);
  }

  stripHtml(html: string | null | undefined): string {
    if (!html) {
      return '';
    }

    const doc = new DOMParser().parseFromString(html, 'text/html');

    return (doc.body.textContent || '').replace(/\s+/g, ' ').trim();
  }
}
