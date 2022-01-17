import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  src: string = '';

  @Output() callbackData: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  callSearch(termino: string): void {
    if (termino.length >= 3) {
      this.callbackData.emit(termino);
    }
  }
}
