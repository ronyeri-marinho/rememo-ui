import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { CreateDeckModel } from '../../../models/deck/create-deck.model';

@Injectable({
  providedIn: 'root',
})
export class DeckRestApiService {
  private readonly baseUrl: string = `${environment.rememoApiUrl}/decks`;

  constructor(private httpClient: HttpClient) {}

  createDeck(body: CreateDeckModel): Observable<void> {
    return this.httpClient.post<void>(`${this.baseUrl}`, body);
  }
}
