import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { TrackModel } from '@core/models/tracks.model';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  constructor(private http: HttpClient) {}

  getAllTracks$(): Observable<any> {
    return this.http.get(`${environment.api}/tracks`).pipe(
      map(({ data }: any) => {
        return data;
      })
    );
  }

  getAllRandom$(): Observable<any> {
    return this.http.get(`${environment.api}/tracks`).pipe(
      mergeMap(({ data }: any) => this.skipById(data, 1)),
      catchError((error) => {
        return of([]);
      })
    );
  }

  // Solo como ejempl de filtro de información
  private skipById(trackList: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const tracks = trackList.filter((t: TrackModel) => t._id !== id);
      resolve(tracks);
    });
  }
}
