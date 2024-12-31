import {provideRouter} from '@angular/router';
import {routes} from './app-routing.module';
import {provideAnimations} from '@angular/platform-browser/animations';


export const APP_PROVIDERS = [
  provideRouter(routes),
  provideAnimations()
];
