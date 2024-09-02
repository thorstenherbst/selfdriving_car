import { Route } from '@angular/router';
import { AppComponent } from './app.component';

import('./remote-entry/entry.routes');
export const appRoutes: Route[] = [
  { path: '', redirectTo: 'start', pathMatch: 'full'},
  { path: 'start', component: AppComponent},
];
