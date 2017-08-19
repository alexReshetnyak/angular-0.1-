import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { User } from '../models/user';

@Injectable()
export class UserService {
  private usersUrl: string = 'https://reqres.in/api/users';
  public films = new Subject();
  public filmsArray = [];
  private  filmsUrl: string = 
  "https://api.themoviedb.org/3/discover/movie?api_key=4f6a92e0a096ef372e94f1dfb9403a29&language=ru&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";

  constructor(private http: Http) {
    this.getFilmsFromApi().subscribe((data) => {
      this.setFilms(data);
      this.filmsArray = data;
    });
  }

  getFilms(){
    var self = this;
    if (this.filmsArray.length > 0) {
      setTimeout(self.setFilms.bind(self, self.filmsArray), 0);
    }  
    return this.films.asObservable();
  }

  setFilms(films){
    this.films.next(films);
  }

  getFilm(id, films){
    return films.filter(film => film.id == id)[0];
  }

  getFilmsFromApi(): Observable<User[]> {
    // добавляем токен

    return this.http.get(this.filmsUrl)
      .map(res => res.json().results)
      .map(films => films.map(this.toFilm))
      .catch(this.handleError);
  }

  /**
   * Преобразовать данные "на лету" в тот формат который нужен нам
   */
  private toFilm(film): User {
    return {
      id: film.id,
      title: film.title,
      overview: film.overview,
      poster: film.poster_path,
    };
  }

  createFilm(film: User){
    let id = 0;
    this.filmsArray.forEach((filmArray) => {
      if (+filmArray.id >= id) {
        id = +filmArray.id;
      }
    });
    film.id = (id + 1);
    this.filmsArray = [film, ...this.filmsArray];
    this.setFilms(this.filmsArray);
  }


  updateFilm(film: User) {
    this.filmsArray.forEach(filmArray => {
      if (filmArray.id === film.id) {
        filmArray = film;
      }
    });
  }

  deleteFilm(film: User){
    let index = this.filmsArray.indexOf(film);
    if (index >= 0) {
      this.filmsArray.splice(index, 1);
    }
  }


  private handleError(err) {
    let errMessage: string;

    if (err instanceof Response) {
      let body   = err.json() || '';
      let error  = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }

    return Observable.throw(errMessage);
  }

}
