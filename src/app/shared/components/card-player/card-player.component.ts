import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css'],
})
export class CardPlayerComponent implements OnInit {
  @Input() mode: 'small' | 'big' = 'small';
  @Input() track: TrackModel = {
    _id: 0,
    album: '',
    cover: '',
    name: '',
    url: '',
  };

  constructor(private multimediaService: MultimediaService) {}

  ngOnInit(): void {}

  sendPlay(track: TrackModel): void {
    console.log(track);
    this.multimediaService.trackInfo$.next(track);
  }
}
