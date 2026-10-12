import { Routes } from '@angular/router';
import { BaseLayout } from './layout/base-layout/base-layout';
import { ListDecks } from './features/decks/list-decks/list-decks';
import { CreateDeck } from './features/decks/create-deck/create-deck';
import { canActivateAuth } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: BaseLayout,
    canActivate: [canActivateAuth],
    children: [
      {
        path: 'decks',
        component: ListDecks,
      },

      {
        path: 'decks/new',
        component: CreateDeck,
      },
    ],
  },
];
