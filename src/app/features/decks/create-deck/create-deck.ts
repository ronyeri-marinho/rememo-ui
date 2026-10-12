import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { LabelModule } from 'primeng/label';
import { TextareaModule } from 'primeng/textarea';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { PageHeader } from '../../../shared/components/page-header/page-header';
import { CreateDeckModel } from '../../../models/deck/create-deck.model';
import { DeckRestApiService } from '../../../core/service/api/deck-rest-api.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  imports: [
    PageHeader,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    LabelModule,
    TextareaModule,
    CardModule,
    ButtonModule,
  ],
  selector: 'app-create-deck',
  styleUrl: './create-deck.css',
  templateUrl: './create-deck.html',
})
export class CreateDeck {
  private _createDeckFormBuilder = inject(FormBuilder);

  constructor(
    private deckRestApiService: DeckRestApiService,
    private readonly _router: Router,
    private readonly _messageService: MessageService,
  ) {}

  public createDeckForm = this._createDeckFormBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(255)]],
    description: [''],
  });

  get nameControl() {
    return this.createDeckForm.get('name');
  }

  get descriptionControl() {
    return this.createDeckForm.get('description');
  }

  showSuccess() {
    this._messageService.add({
      severity: 'success',
      summary: 'Criação de deck',
      detail: 'Seu deck foi criado com sucesso!',
      life: 5000,
    });
  }

  showError() {
    this._messageService.add({
      severity: 'error',
      summary: 'Erro ao criar deck',
      detail: 'Não foi possível criar o deck. Por favor, tente novamente.',
      life: 5000,
    });
  }

  createDeck() {
    const body = this.createDeckForm.value as CreateDeckModel;

    this.deckRestApiService.createDeck(body).subscribe({
      next: () => {
        this.showSuccess();
        this._router.navigate(['/decks']);
      },
      error: (error) => {
        console.error('Erro ao criar deck:', error);
        this.showError();
      },
    });
  }
}
