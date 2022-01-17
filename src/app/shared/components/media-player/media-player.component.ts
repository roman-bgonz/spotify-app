import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Subscription } from 'rxjs';
import { MultimediaService } from '../../services/multimedia.service';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover: TrackModel = {
    cover: 'https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc',
    album: 'Gioli & Assia',
    name: 'BEBE (Oficial)',
    url: 'http://localhost',
    _id: 1,
  };

  listObserver: Array<Subscription> = [];

  constructor(private multimediaService: MultimediaService) {}

  ngOnInit(): void {
    const observer$: Subscription = this.multimediaService.callback.subscribe(
      (response: TrackModel) => {}
    );

    this.listObserver.push(observer$);
  }

  ngOnDestroy(): void {
    this.listObserver.forEach((s) => s.unsubscribe());
  }
}
