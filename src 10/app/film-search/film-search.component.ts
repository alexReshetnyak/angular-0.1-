import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent implements OnInit {

  filmName: string = '';

  @Output()
  selectFilm: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  searchFilms(){
    this.selectFilm.emit(this.filmName);
  }
}
