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
  mockCover!: TrackModel;

  listObservers$: Array<Subscription> = [];

  constructor(public multimediaService: MultimediaService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.listObservers$.forEach((s) => s.unsubscribe());
  }
}
