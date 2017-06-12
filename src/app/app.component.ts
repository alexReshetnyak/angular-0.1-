import { Component, ViewChild, Inject, Renderer, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
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

  top: number;
  


  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer) {
    this.renderer.listenGlobal('window', 'scroll', (evt) => { 
      this.scrollFunction();
    });
  }


  scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("topBtn").style.display = "block";
      } else {
          document.getElementById("topBtn").style.display = "none";
      }
  }

  topFunction() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

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
