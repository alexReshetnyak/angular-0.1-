import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/observable'

@Injectable()
export class FilmCardService {
  url: string = "http://omdbapi.com/?page=1&s=";
  constructor(private http: Http) { }

  private extractData(res: Response){
    let body = res.json();
    return body.Search || {};
  }

  getFilms(filmName: string){
    return this.http.get(this.url + filmName).map(this.extractData); //отправить запрос и получить ответ в виде Observable (promise) map срабатывает каждый раз когда приходит ответ и запускает функцию
  }
}
