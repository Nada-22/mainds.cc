import { Routes } from "@angular/router";
import { UserListComponent } from "./user-list/user-list.component";
import { UserDetailsComponent } from "./user-list/user-details/user-details.component";

export const userRoutes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: UserListComponent,
       
    },
    {
        path: ':id',
        component: UserDetailsComponent,
       
    }
]