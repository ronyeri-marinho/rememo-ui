import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import Aura from '@primeuix/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { MessageService } from 'primeng/api';

import { includeBearerTokenInterceptor } from 'keycloak-angular';
import { environment } from '../environments/environment';
import { keycloakInitializer } from './keycloak.config';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    keycloakInitializer(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([includeBearerTokenInterceptor])),
    MessageService,
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false,
          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng',
          },
        },
      },
      license: environment.primeUiLicenseKey,
    }),
  ],
};
