import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public sendCredentials(email: string, password: string): Observable<any> {
    const body = {
      email,
      password,
    };
    return this.http
      .post(`${environment.api}/auth/login`, body)
      .pipe
      /*tap((responseOk: any) => {
        this.cookieService.set('token', responseOk.tokenSession, 4, '/');
      })*/
      ();
  }
}
