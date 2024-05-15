import { AppState } from './../../state/app.state';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {

const appState= inject(AppState)
appState.setAppLoading(true);

    return next(req).pipe(
      
      finalize(() => {
        setTimeout(() => {            
            appState.setAppLoading(false);
          }, 500);
        }),
      
      // finalize(() =>appState.setAppLoading(false))
    );
 
};
