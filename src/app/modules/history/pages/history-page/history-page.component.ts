import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css'],
})
export class HistoryPageComponent implements OnInit {
  listResults$: Observable<any> = of([]);
  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}

  recibirData(termino: string) {
    this.listResults$ = this.searchService.searchTracks$(termino);
  }
}
