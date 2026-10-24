import { Routes } from '@angular/router';
import { BaseLayout } from './layout/base-layout/base-layout';
import { DeckListPage } from './features/decks/list/deck-list-page/deck-list-page';
import { CreateDeck } from './features/decks/create/create-deck/create-deck';
import { canActivateAuth } from './core/guards/auth.guard';
import { DeckDetailsPage } from './features/decks/details/deck-details-page/deck-details-page';
import { CreateDeckFlashcard } from './features/decks/details/create-deck-flashcard/create-deck-flashcard';

export const routes: Routes = [
  {
    path: '',
    component: BaseLayout,
    canActivate: [canActivateAuth],
    children: [
      {
        path: 'decks',
        component: DeckListPage,
      },
      {
        path: 'decks/new',
        component: CreateDeck,
      },
      {
        path: 'decks/:deckId',
        component: DeckDetailsPage,
      },
      {
        path: 'decks/:deckId/new-flashcard',
        component: CreateDeckFlashcard,
      },
    ],
  },
];
