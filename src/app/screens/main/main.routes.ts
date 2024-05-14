import { Routes } from "@angular/router";
import { MainComponent } from "./main.component";

export const mainRoutes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [

            { path: 'user', loadChildren: () => import('../user/user.routes').then(r => r.userRoutes) },
        ]
    }
]