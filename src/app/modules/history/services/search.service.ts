import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  // Como se uso el async pipe, al info llego dentro de un objeto data
  searchTracks$(term: string): Observable<any> {
    return this.http
      .get(`${environment.api}/tracks?src=${term}`)
      .pipe(map(({ data }: any) => data));
  }
}
