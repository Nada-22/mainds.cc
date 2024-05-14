import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = inject(HttpClient);
  API_URL=environment.API_URL;
  constructor() { }

  getUsers(page:number): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("page", page);
   return this.http.get<any>(this.API_URL + '/users',{params:queryParams})
  }
}
