import { Component, OnInit, signal } from '@angular/core';
import { DeckRestApiService } from '../../../../core/service/api/deck-rest-api.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Deck } from '../../../../models/deck/deck.model';
import { MessageService, MenuItem } from 'primeng/api';
import { PageHeader } from '../../../../shared/components/page-header/page-header';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { DividerModule } from 'primeng/divider';
import { PageCardStat } from '../page-card-stat/page-card-stat';
import { Card } from 'primeng/card';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DeckDetailsSkeleton } from '../deck-details-skeleton/deck-details-skeleton';

@Component({
  imports: [
    PageHeader,
    MenuModule,
    ButtonModule,
    RippleModule,
    DividerModule,
    PageCardStat,
    Card,
    InputGroup,
    InputGroupAddon,
    InputTextModule,
    ReactiveFormsModule,
    DeckDetailsSkeleton,
    RouterLink,
  ],
  selector: 'app-deck-details-page',
  styleUrl: './deck-details-page.css',
  templateUrl: './deck-details-page.html',
})
export class DeckDetailsPage implements OnInit {
  private deckId!: string;
  public deck = signal<Deck>({} as Deck);
  public isLoadingDeck = signal<boolean>(false);
  items: MenuItem[] = [];

  public searchControl = new FormControl('', {
    nonNullable: true,
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _messageService: MessageService,
    private deckRestApiService: DeckRestApiService,
  ) {}

  ngOnInit(): void {
    this.deckId = this.route.snapshot.paramMap.get('deckId')!;
    this.getDeck();
    this.loadMenuItems();
  }

  private getDeck() {
    this.isLoadingDeck.set(true);
    this.deckRestApiService.getDeck(this.deckId).subscribe({
      next: (deck) => {
        this.deck.set(deck);
        this.isLoadingDeck.set(false);
      },
      error: (error) => {
        this.showGetDeckToastError();
        console.error('Error fetching deck details:', error);
        this.isLoadingDeck.set(false);
        this.router.navigate(['/decks']);
      },
    });
  }

  private showGetDeckToastError() {
    this._messageService.add({
      severity: 'error',
      summary: 'Erro ao buscar detalhes do deck',
      detail:
        'Não foi possível buscar os detalhes do deck. Por favor, verifique a disponibilidade de seu deck e tente novamente.',
      life: 10000,
    });
  }

  private loadMenuItems() {
    this.items = [
      {
        icon: 'refresh',
        label: 'Atualizar',
        command: () => console.log('Refresh action triggered'),
      },
      {
        icon: 'edit',
        label: 'Editar',
        command: () => console.log('Edit action triggered'),
      },
      {
        icon: 'delete',
        label: 'Excluir',
        command: () => console.log('Delete action triggered'),
      },
      // {
      //   icon: 'pi pi-external-link',
      //   target: '_blank',
      //   url: 'https://angular.dev',
      // },
    ];
  }
}
