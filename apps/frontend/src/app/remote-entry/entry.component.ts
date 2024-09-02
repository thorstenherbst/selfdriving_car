import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent, RouterOutlet, RouterLink],
  selector: 'app-frontend-entry',
  template: `
      <router-outlet></router-outlet>
  `,
})
export class RemoteEntryComponent {}
