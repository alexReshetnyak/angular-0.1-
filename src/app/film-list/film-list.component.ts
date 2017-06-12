import { Component, OnInit, Input, Output } from '@angular/core';
import {FilmService} from '../film.service';

@Component({
  selector: 'film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  filmList : Object[] = [];
  selectedValue: number;
  filmName : string;
  pageList: number;
  hideLoader: boolean;
  
  constructor(private filmCardService: FilmService) { }

  ngOnInit() {
    this.filmName = "star";
    this.selectedValue = 1;
    this.pageList = 1;
    this.hideLoader = true;
    this.getFilms();
    
  }

  getFilms(){
    this.hideLoader= false;
    if(!this.filmName) {return;}
    if(this.pageList === 1){ this.filmList = [] }
    this.filmCardService.getFilms(this.filmName, this.pageList).subscribe(data => {
      this.hideLoader= true;
      if (data.length > 0) {
        this.filmList = [...this.filmList, ...data];
      }
    });
  }

  getMoreFilms(){
    this.pageList++;
    this.getFilms();
  }

  getHeight(){
    return (this.selectedValue === 1) ? '800px': '420px';
  }
}
