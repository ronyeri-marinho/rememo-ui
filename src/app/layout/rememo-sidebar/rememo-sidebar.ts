import { Component, signal } from '@angular/core';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';

import { AvatarModule } from 'primeng/avatar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { SidebarCollapsible, SidebarSide, SidebarVariant } from 'primeng/types/sidebar';
import { User } from '../../models/user/user.model';
import { UserSessionService } from '../../core/service/user-session.service';

interface NavItem {
  icon: string;
  label: string;
  badge?: string;
  href: string;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

@Component({
  imports: [AvatarModule, SidebarModule, ButtonModule, RouterLinkWithHref, RouterOutlet],
  selector: 'app-rememo-sidebar',
  styleUrl: './rememo-sidebar.css',
  templateUrl: './rememo-sidebar.html',
})
export class RememoSidebar {
  readonly sessionUser = signal<User | null>(null);
  userAvatarLabel: string = '';

  side: SidebarSide = 'left';
  navGroups: NavGroup[] = [
    {
      label: 'Menu',
      items: [
        { icon: 'home', label: 'Página Inicial', href: '/' },
        { icon: 'layers', label: 'Decks', href: '/decks' },
        { icon: 'settings', label: 'Configurações', href: '/settings' },
      ],
    },
  ];

  isMobile = signal(false);

  private defineAvatarLabel(user: User | null): void {
    if (user) {
      const firstNameInitial = user.firstName.charAt(0).toUpperCase();
      const lastNameInitial = user.lastName.charAt(0).toUpperCase();
      this.userAvatarLabel = `${firstNameInitial}${lastNameInitial}`;
    } else {
      this.userAvatarLabel = '';
    }
  }

  constructor(private userSessionService: UserSessionService) {
    this.sessionUser.set(this.userSessionService.getSessionUser());
    this.defineAvatarLabel(this.sessionUser());
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia('(max-width: 1023px)');
    this.isMobile.set(mql.matches);
    mql.addEventListener('change', (e) => this.isMobile.set(e.matches));
  }
}
