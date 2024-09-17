import { Route } from '@angular/router';
import { AppComponent } from './app.component';

import('./remote-entry/entry.routes');
export const appRoutes: Route[] = [
  { path: '', redirectTo: 'car', pathMatch: 'full',
  },
  {
    path: 'car',
    component: AppComponent,
  }

];
