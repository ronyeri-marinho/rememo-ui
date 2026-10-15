import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, finalize, map, Subscription } from 'rxjs';
import { RouterLink, RouterOutlet } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';

import { PageHeader } from '../../../../shared/components/page-header/page-header';
import { Deck } from '../../../../models/deck/deck.model';
import { DeckRestApiService } from '../../../../core/service/api/deck-rest-api.service';
import { PageEndMessage } from '../../../../shared/components/page-end-message/page-end-message';
import { PageEmptyMessage } from '../../../../shared/components/page-empty-message/page-empty-message';
import { DeckCardSkeleton } from '../deck-card-skeleton/deck-card-skeleton';
import { PageErrorMessage } from '../../../../shared/components/page-error-message/page-error-message';
import { PageDeckCard } from '../page-deck-card/page-deck-card';

@Component({
  selector: 'app-deck-list-page',
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
    ReactiveFormsModule,
    PageEndMessage,
    PageEmptyMessage,
    DeckCardSkeleton,
    PageErrorMessage,
  ],
  templateUrl: './deck-list-page.html',
  styleUrl: './deck-list-page.css',
})
export class DeckListPage implements OnInit, AfterViewInit, OnDestroy {
  private readonly _sentinel = viewChild<ElementRef<HTMLElement>>('sentinel');

  private _observer?: IntersectionObserver;
  private searchSubscription?: Subscription;
  private requestSubscription?: Subscription;

  private sentinelVisible = false;
  private currentSearch = '';

  private requestId = 0;

  public searchControl = new FormControl('', {
    nonNullable: true,
  });

  public loading = signal(false);
  public decks = signal<Deck[]>([]);
  public currentPage = 0;
  public readonly pageSize = 6;
  public decksTotal = 0;
  public hasMore = true;
  public error = false;
  public initialLoadComplete = false;

  constructor(
    private readonly deckRestApiService: DeckRestApiService,
    private readonly changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.searchSubscription = this.searchControl.valueChanges
      .pipe(
        map((term) => term.trim()),
        debounceTime(300),
        distinctUntilChanged(),
      )
      .subscribe((term) => {
        this.searchDecks(term);
      });
  }

  ngAfterViewInit(): void {
    this._observer = new IntersectionObserver(
      (entries) => {
        this.sentinelVisible = entries.some((entry) => entry.isIntersecting);

        if (this.sentinelVisible) {
          this.loadNextPage();
        }
      },
      {
        root: null,
        rootMargin: '300px',
        threshold: 0,
      },
    );

    const sentinel = this._sentinel()?.nativeElement;

    if (sentinel) {
      this._observer.observe(sentinel);
    }
  }

  ngOnDestroy(): void {
    this._observer?.disconnect();
    this.searchSubscription?.unsubscribe();

    this.requestId++;
    this.requestSubscription?.unsubscribe();
  }

  private searchDecks(term: string): void {
    this.requestId++;
    this.requestSubscription?.unsubscribe();
    this.requestSubscription = undefined;

    this.currentSearch = term;
    this.decks.set([]);
    this.loading.set(false);
    this.currentPage = 0;
    this.decksTotal = 0;
    this.hasMore = true;
    this.error = false;

    this.changeDetectorRef.detectChanges();

    this.loadNextPage();
  }

  public loadNextPage(): void {
    if (this.loading() || !this.hasMore) {
      return;
    }

    this.loading.set(true);
    this.error = false;

    const currentRequestId = ++this.requestId;

    this.requestSubscription = this.deckRestApiService
      .list(this.currentPage, this.pageSize, this.currentSearch)
      .pipe(
        finalize(() => {
          if (currentRequestId !== this.requestId) {
            return;
          }

          this.loading.set(false);
          this.initialLoadComplete = true;

          this.changeDetectorRef.detectChanges();

          if (this.sentinelVisible && this.hasMore && !this.error) {
            queueMicrotask(() => this.loadNextPage());
          }
        }),
      )
      .subscribe({
        next: (response) => {
          if (currentRequestId !== this.requestId) {
            return;
          }

          this.decks.set([...this.decks(), ...response.content]);
          this.currentPage = response.page.number + 1;
          this.decksTotal = response.page.totalElements;
          this.hasMore = response.page.number + 1 < response.page.totalPages;

          this.changeDetectorRef.detectChanges();
        },
        error: () => {
          if (currentRequestId !== this.requestId) {
            return;
          }

          this.error = true;
          this.changeDetectorRef.detectChanges();
        },
      });
  }

  public retry(): void {
    this.loadNextPage();
  }
}
