import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';
import {FilmService} from '../film.service';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent implements OnInit {
  filteredStates: any = [];
  filmName: string = '';
  filmNames: string[] = [];

  @Output()
  selectFilm: EventEmitter<string> = new EventEmitter();

  constructor(private filmCardService: FilmService) {
  }

  ngOnInit() {
    this.autoFilms();
  }

  autoFilms(){
    this.filmCardService.getFilms(this.filmName).subscribe(data => {
      if (this.filmName === "") {this.filmNames = []}
      if (!(data.length > 0)) {return;}
      this.filmNames = data.map(film => film.Title);
    });
  }

  searchFilms(){
    var self = this;
    setTimeout( ()=>{this.selectFilm.emit(this.filmName);}, 100);
  }
}
