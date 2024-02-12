import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'reminders',
    pathMatch: 'full',
  },
  {
    path: 'reminders',
    loadComponent: () => import('./pages/reminders/reminders.page').then( m => m.RemindersPage)
  },
  {
    path: 'reminders/:id',
    loadComponent: () => import('./pages/reminder-details/reminder-details.page').then( m => m.ReminderDetailsPage)
  },

];
