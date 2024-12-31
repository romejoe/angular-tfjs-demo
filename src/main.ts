import {enableProdMode} from '@angular/core';
import {environment} from './environments/environment';
import {AppComponent} from './app/app.component';
import {bootstrapApplication} from '@angular/platform-browser';
import {APP_PROVIDERS} from './app/app.providers';

if (environment.production) {
  enableProdMode();
}
bootstrapApplication(AppComponent, {
  providers: APP_PROVIDERS
}).catch(err => console.error(err));
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
