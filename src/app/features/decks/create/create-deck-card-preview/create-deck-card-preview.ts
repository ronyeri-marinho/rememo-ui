import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-create-deck-card-preview',
  styleUrl: './create-deck-card-preview.css',
  templateUrl: './create-deck-card-preview.html',
})
export class CreateDeckCardPreview {
  @Input() public deckIcon: string = 'school';
  @Input() public deckName: string = 'Nome do seu Deck';
  @Input() public deckDescription: string =
    'Sua descrição aparecerá aqui. Conte um pouco sobre o que você pretende estudar.';
}
