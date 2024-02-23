import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'reminders/:id',
    loadComponent: () => import('./pages/reminder-details/reminder-details.page').then(m => m.ReminderDetailsPage)
  }
];
