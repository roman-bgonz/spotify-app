import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { TrackModel } from '../../../../core/models/tracks.model';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css'],
})
export class HistoryPageComponent implements OnInit {
  listResults: TrackModel[] = [];
  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}

  recibirData(termino: string) {
    this.searchService.searchTracks$(termino).subscribe(({ data }) => {
      this.listResults = data;
    });
  }
}
