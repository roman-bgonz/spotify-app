import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of, timer } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  dataTracksTrending$: Observable<TrackModel[]> = of([]);
  dataTracksRandom$: Observable<TrackModel[]> = of([]);

  constructor() {
    const { data }: any = (dataRaw as any).default;
    this.dataTracksTrending$ = of(data);

    this.dataTracksRandom$ = new Observable((observer) => {
      const track: TrackModel = {
        _id: 9,
        album: 'Cartel de Santa',
        cover:
          'https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/889853882823.jpg',
        name: 'Leve',
        url: 'http://',
      };

      timer(3500).subscribe(() => observer.next([track]));
    });
  }
}
