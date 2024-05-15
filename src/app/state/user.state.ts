import { Injectable, signal } from "@angular/core";
import { UserI } from "../shared/interfaces/user.interface";

@Injectable({
    providedIn: 'root'
})
export class UserState {

    private readonly state = {
        users$: signal<UserI[]>([]),

    } as const;

    readonly users$ = this.state.users$.asReadonly();

    setUsers(user: UserI[]) {

        this.state.users$.set(user);

    };

}
