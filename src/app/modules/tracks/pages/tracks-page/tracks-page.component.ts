import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Subscription } from 'rxjs';
import { TrackService } from '../../services/track.service';
@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css'],
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];

  listObservers$: Array<Subscription> = [];

  constructor(private trackService: TrackService) {}

  ngOnInit(): void {
    const observer$ = this.trackService.dataTracksTrending$.subscribe(
      (response) => {
        this.tracksTrending = response;
        this.tracksRandom = response;
      }
    );

    const observer2$ = this.trackService.dataTracksRandom$.subscribe(
      (response) => {
        this.tracksRandom = [...this.tracksRandom, ...response];
      }
    );

    this.listObservers$ = [observer$, observer2$];
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach((s) => s.unsubscribe());
  }
}
