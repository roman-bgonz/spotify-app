import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Subscription } from 'rxjs';
import { MultimediaService } from '../../services/multimedia.service';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('');
  mockCover!: TrackModel;

  listObservers$: Array<Subscription> = [];

  state: string = 'paused';

  constructor(public multimediaService: MultimediaService) {}

  ngOnInit(): void {
    const obs$ = this.multimediaService.playerStatus$.subscribe(
      (status) => (this.state = status)
    );

    this.listObservers$ = [obs$];
  }

  handlePosition(event: MouseEvent) {
    const { clientX } = event;
    const elNative: HTMLElement = this.progressBar.nativeElement;
    const { x, width } = elNative.getBoundingClientRect();
    const clickX = clientX - x;
    const percentageFromX = (clickX * 100) / width;
    this.multimediaService.seekAudio(percentageFromX);
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach((s) => s.unsubscribe());
  }
}
