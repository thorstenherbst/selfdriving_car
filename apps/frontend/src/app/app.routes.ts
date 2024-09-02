import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail.component';

import('./remote-entry/entry.routes');
export const appRoutes: Route[] = [
  { path: '', redirectTo: 'people', pathMatch: 'full'},
  { path: 'people', component: AppComponent},
  { path: 'people/:id', component: DetailComponent},
];
