import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication }             from '@angular/platform-browser';
import {provideRouter, RouterModule} from '@angular/router';
import {BrowserAnimationsModule, provideAnimations} from '@angular/platform-browser/animations';
import { AppComponent }                     from './app/app.component';
import { routes }                           from './app/app.routes';
import { SharedModule }                     from './app/shared/shared.module';
import { HttpClientModule }                 from '@angular/common/http';
import { ChatService }                      from './app/features/chat/services/chat.service';
import { AuthService }                      from './app/core/services/auth.service';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(
      SharedModule,
      HttpClientModule
    ),
    ChatService,
    AuthService
  ]
})
  .catch(err => console.error(err));
