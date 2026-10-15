import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { CreateDeckModel } from '../../../models/deck/create-deck.model';
import { PageResponse } from '../../../models/pagination/page-response.model';
import { Deck } from '../../../models/deck/deck.model';

@Injectable({
  providedIn: 'root',
})
export class DeckRestApiService {
  private readonly baseUrl: string = `${environment.rememoApiUrl}/decks`;

  constructor(private httpClient: HttpClient) {}

  list(page: number, size: number, search = ''): Observable<PageResponse<Deck>> {
    let params = new HttpParams().set('page', page).set('size', size).set('sort', 'updatedAt,desc');

    if (search) {
      params = params.set('search', `deckContains:${search}`);
    }

    return this.httpClient.get<PageResponse<Deck>>(`${this.baseUrl}`, { params });
  }

  createDeck(body: CreateDeckModel): Observable<void> {
    return this.httpClient.post<void>(`${this.baseUrl}`, body);
  }
}
