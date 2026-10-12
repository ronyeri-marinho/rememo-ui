import { Component } from '@angular/core';
import { PageHeader } from '../../../shared/components/page-header/page-header';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Deck } from '../../../models/deck/deck.model';
import { PageDeckCard } from '../../../shared/components/page-deck-card/page-deck-card';

@Component({
  imports: [
    PageHeader,
    ButtonModule,
    CardModule,
    DividerModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    RouterLink,
    RouterOutlet,
    PageDeckCard,
  ],
  selector: 'app-list-decks',
  styleUrl: './list-decks.css',
  templateUrl: './list-decks.html',
})
export class ListDecks {
  decks: Deck[] = [
    {
      uuid: 'c2052586-23a5-4e78-8989-487f037c6fe0',
      name: 'Java e Spring',
      description: 'Conceitos, APIs e boas práticas do Java e Spring Framework.',
      cardsCount: 10,
      icon: 'code_xml',
    },
    {
      uuid: 'c2052586-23a5-4e78-8989-487f037c6fe1',
      name: 'System Design',
      description: 'Arquitetura e design de sistemas distribuídos, escaláveis e resilientes.',
      cardsCount: 10,
      icon: 'hub',
    },
    {
      uuid: 'c2052586-23a5-4e78-8989-487f037c6fe2',
      name: 'SQL',
      description: 'Consultas, joins, índices e otimização de banco de dados relacional.',
      cardsCount: 10,
      icon: 'database',
    },
  ];
}
