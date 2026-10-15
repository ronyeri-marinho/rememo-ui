import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DeckIconOption } from '../../../../models/deck/dek-icon-option.model';

@Component({
  imports: [],
  selector: 'app-deck-icon-picker',
  styleUrl: './deck-icon-picker.css',
  templateUrl: './deck-icon-picker.html',
})
export class DeckIconPicker {
  @Input() selectedIcon = 'school';
  @Output() selectedIconChange = new EventEmitter<string>();

  public readonly icons: DeckIconOption[] = [
    { name: 'code_xml', label: 'Programação' },
    { name: 'database', label: 'Banco de dados' },
    { name: 'hub', label: 'Sistemas Distribuídos' },
    { name: 'flowchart', label: 'System Design' },
    { name: 'terminal', label: 'Terminal' },
    { name: 'devices', label: 'Tecnologia' },
    { name: 'cloud', label: 'Computação em Nuvem' },
    { name: 'security', label: 'Segurança' },
    { name: 'sports_esports', label: 'Jogos' },
    { name: 'school', label: 'Estudos' },
    { name: 'menu_book', label: 'Livros' },
    { name: 'bookmark', label: 'Favoritos' },
    { name: 'translate', label: 'Idiomas' },
    { name: 'calculate', label: 'Matemática' },
    { name: 'science', label: 'Ciências' },
    { name: 'public', label: 'Geografia' },
    { name: 'history_edu', label: 'História' },
    { name: 'biotech', label: 'Biologia' },
    { name: 'palette', label: 'Arte' },
    { name: 'work', label: 'Trabalho' },
    { name: 'lightbulb', label: 'Ideias' },
    { name: 'music_note', label: 'Música' },
    { name: 'medical_services', label: 'Medicina/Saúde' },
    { name: 'pets', label: 'Medicina Veterinária' },
  ];

  public selectIcon(iconName: string): void {
    this.selectedIconChange.emit(iconName);
  }
}
