import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
    },
    {
        path: '',
        loadChildren: () => import('./screens/main/main.routes').then(r => r.mainRoutes),

    },
];
