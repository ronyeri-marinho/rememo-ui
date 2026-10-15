import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserSessionService } from './core/service/user-session.service';
import { ToastModule } from 'primeng/toast';

@Component({
  imports: [RouterOutlet, ToastModule],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('rememo-ui');
  readonly sessionReady = signal(false);

  constructor(private userSessionService: UserSessionService) {}

  async ngOnInit(): Promise<void> {
    try {
      await this.userSessionService.syncUser();
    } catch (error) {
      console.error('Erro ao sincronizar usuário:', error);
    } finally {
      this.sessionReady.set(true);
    }
  }
}
