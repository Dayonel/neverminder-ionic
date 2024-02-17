import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'reminders',
                loadComponent: () =>
                    import('../reminders/reminders.page').then((m) => m.RemindersPage),
            },
            {
                path: 'add',
                loadComponent: () =>
                    import('../add-reminder/add-reminder.page').then((m) => m.AddReminderPage),
            },
            {
                path: 'account',
                loadComponent: () =>
                    import('../account/account.page').then((m) => m.AccountPage),
            },
            {
                path: '',
                redirectTo: '/reminders',
                pathMatch: 'full',
            },
            // {
            //     path: ':id',
            //     loadComponent: () => import('../reminder-details/reminder-details.page').then(m => m.ReminderDetailsPage)
            // },
        ],
    },
    {
        path: '',
        redirectTo: '/reminders',
        pathMatch: 'full',
    },
];
