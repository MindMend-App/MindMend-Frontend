import { enableProdMode }         from '@angular/core';
import { bootstrapApplication }   from '@angular/platform-browser';
import { provideRouter }          from '@angular/router';
import { provideAnimations }      from '@angular/platform-browser/animations';
import { importProvidersFrom }    from '@angular/core';

import { AppComponent }           from './app/app.component';
import { routes }                 from './app/app.routes';


import { CoreModule }             from './app/core/core.module';
import { SharedModule }           from './app/shared/shared.module';
import { environment }            from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    importProvidersFrom(
      CoreModule,
      SharedModule
    )
  ]
})
  .catch(err => console.error(err));
