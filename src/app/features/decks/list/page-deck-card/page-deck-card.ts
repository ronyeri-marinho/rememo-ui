import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { Deck } from '../../../../models/deck/deck.model';

@Component({
  imports: [
    ButtonModule,
    CardModule,
    DividerModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
  ],
  selector: 'app-page-deck-card',
  styleUrl: './page-deck-card.css',
  templateUrl: './page-deck-card.html',
})
export class PageDeckCard {
  @Input() deck: Deck | null = null;
}
