import Keycloak, { KeycloakProfile } from 'keycloak-js';
import { inject, Injectable, OnInit } from '@angular/core';
import { User } from '../../models/user/user.model';
import { UserRestApiService } from './api/user-rest-api.service';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';

@Injectable({
  providedIn: 'root',
})
export class UserSessionService {
  private readonly keycloak = inject(Keycloak);

  constructor(private userRestApiService: UserRestApiService) {}

  isAuthenticated(): boolean {
    return this.keycloak?.authenticated ?? false;
  }

  async syncUser(): Promise<void> {
    if (!this.isAuthenticated()) {
      return;
    }

    const userSynced = sessionStorage.getItem('userSynced') === 'true';
    const userJson = sessionStorage.getItem('user');

    if (userSynced && userJson) {
      return;
    }

    const user = await firstValueFrom(this.userRestApiService.syncUser());

    sessionStorage.setItem('user', JSON.stringify(user));
    sessionStorage.setItem('userSynced', 'true');
  }

  getSessionUser(): User | null {
    const userJson = sessionStorage.getItem('user');

    if (!userJson) {
      return null;
    }

    try {
      return JSON.parse(userJson) as User;
    } catch {
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('userSynced');
      return null;
    }
  }

  logout(): void {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('userSynced');
    this.keycloak.logout();
  }
}
