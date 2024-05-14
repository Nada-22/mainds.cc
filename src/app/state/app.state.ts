import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AppState {
    
    private readonly state = {
        appLoading$: signal<boolean>(false),
    } as const;

  readonly appLoading$ = this.state.appLoading$.asReadonly();

  setAppLoading(appLoading: boolean) { 
    this.state.appLoading$.set(!!appLoading);
  }
}
