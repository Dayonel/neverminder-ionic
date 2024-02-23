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
                path: 'account',
                loadComponent: () =>
                    import('../account/account.page').then((m) => m.AccountPage),
            },
            {
                path: '',
                redirectTo: '/reminders',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '',
        redirectTo: '/reminders',
        pathMatch: 'full',
    },
];
