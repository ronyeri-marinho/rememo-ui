import { User } from './../../../models/user/user.model';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class UserRestApiService {
  private readonly baseUrl: string = `${environment.rememoApiUrl}/users`;

  constructor(private httpClient: HttpClient) {}

  syncUser(): Observable<User> {
    return this.httpClient.post<User>(`${this.baseUrl}/sync`, {});
  }
}
