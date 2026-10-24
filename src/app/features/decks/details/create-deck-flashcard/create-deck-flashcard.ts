import { Component, inject, OnInit, signal } from '@angular/core';
import { Deck } from '../../../../models/deck/deck.model';
import { DeckRestApiService } from '../../../../core/service/api/deck-rest-api.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { PageHeader } from '../../../../shared/components/page-header/page-header';
import { Divider } from 'primeng/divider';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { LabelModule } from 'primeng/label';
import { QuillModule } from 'ngx-quill';
import { CreateDeckFlashcardModel } from '../../../../models/deck/create-deck-flashcard.model';
import { ButtonModule } from 'primeng/button';
import { Card } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { DeckFlashcard } from '../deck-flashcard/deck-flashcard';
import { PageEmptyMessage } from '../../../../shared/components/page-empty-message/page-empty-message';

@Component({
  imports: [
    PageHeader,
    Divider,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    LabelModule,
    QuillModule,
    ButtonModule,
    Card,
    BadgeModule,
    DeckFlashcard,
    PageEmptyMessage,
  ],
  selector: 'app-create-deck-flashcard',
  styleUrl: './create-deck-flashcard.css',
  templateUrl: './create-deck-flashcard.html',
})
export class CreateDeckFlashcard implements OnInit {
  private _createFlashcardFormBuilder = inject(FormBuilder);
  private deckId!: string;
  public deck = signal<Deck>({} as Deck);
  public isLoadingDeck = signal<boolean>(false);
  public flashcards = signal<CreateDeckFlashcardModel[]>([]);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _messageService: MessageService,
    private deckRestApiService: DeckRestApiService,
  ) {}

  public createFlashcardForm = this._createFlashcardFormBuilder.group({
    question: ['', [Validators.required, Validators.maxLength(500)]],
    answer: ['', Validators.required],
  });

  get questionControl() {
    return this.createFlashcardForm.get('question');
  }

  get answerControl() {
    return this.createFlashcardForm.get('answer');
  }

  ngOnInit(): void {
    this.deckId = this.route.snapshot.paramMap.get('deckId')!;
    this.getDeck();
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

  public addFlashcard() {
    if (this.createFlashcardForm.valid) {
      const flashcard: CreateDeckFlashcardModel = this.createFlashcardForm
        .value as CreateDeckFlashcardModel;

      flashcard.id = crypto.randomUUID();
      this.flashcards.update((currentFlashcards) => [...currentFlashcards, flashcard]);
      this.createFlashcardForm.reset();
    }
  }

  public updateFlashcard(id: string) {
    const flashcardToUpdate = this.flashcards().find((card) => card.id === id);
    if (flashcardToUpdate) {
      this.createFlashcardForm.setValue({
        question: flashcardToUpdate.question,
        answer: flashcardToUpdate.answer,
      });
      this.flashcards.update((cards) => cards.filter((card) => card.id !== id));
    }
  }

  public deleteFlashcard(id: string) {
    this.flashcards.update((cards) => cards.filter((card) => card.id !== id));
  }

  public saveDeck() {}

  private showGetDeckToastError() {
    this._messageService.add({
      severity: 'error',
      summary: 'Erro ao buscar detalhes do deck',
      detail:
        'Não foi possível buscar os detalhes do deck. Por favor, verifique a disponibilidade de seu deck e tente novamente.',
      life: 10000,
    });
  }

  quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],

      ['bold', 'italic', 'underline', 'strike'],

      [{ color: [] }, { background: [] }],

      ['code', 'link', 'blockquote', 'code-block'],

      [{ list: 'ordered' }, { list: 'bullet' }],

      [{ script: 'sub' }, { script: 'super' }],

      [{ align: [] }],

      ['clean'],
    ],
  };

  quillFormats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'color',
    'background',
    'code',
    'link',
    'blockquote',
    'code-block',
    'list',
    'script',
    'align',
  ];
}
