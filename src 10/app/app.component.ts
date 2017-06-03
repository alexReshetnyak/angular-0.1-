import { Component, ViewChild } from '@angular/core';
import { FilmListComponent } from './film-list/film-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Каталог фильмов JSExpert';
  filmName: string;
  @ViewChild(FilmListComponent)
  filmListComponent: FilmListComponent;

  links = [
    { path: '/dashboard', icon: 'home', label: 'Главная'},
    { path: '/filmList', icon: 'theaters', label: 'Все фильмы'},
    { path: '/profile', icon: 'person', label: 'Профиль'}
  ];

  refreshFilms(event){
    this.filmName = event;
    this.filmListComponent.filmName = event;
    this.filmListComponent.pageList = 1;
    this.filmListComponent.getFilms();
  }
}
