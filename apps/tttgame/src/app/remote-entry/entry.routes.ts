import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { appRoutes } from '../app.routes';

export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntryComponent,
    children: appRoutes
  },
];
