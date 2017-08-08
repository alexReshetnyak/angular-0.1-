import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FilmService {
    filmsUrl: string = "https://api.themoviedb.org/3/discover/movie?api_key=4f6a92e0a096ef372e94f1dfb9403a29&language=ru";
    filmUrlFirstPart: string = "https://api.themoviedb.org/3/movie/";
    filmUrlSecondPart: string = "?api_key=4f6a92e0a096ef372e94f1dfb9403a29&language=ru";
    actorsUrlFirstPart: string = 'https://api.themoviedb.org/3/movie/';
    actorsUrlSecondPart: string = '/credits?api_key=4f6a92e0a096ef372e94f1dfb9403a29';

    constructor(private http: Http) {}

    private extractListData(res: Response) { 
        let body = res.json();
        return body.results || {};
    }

    private extractItemData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private extractActorsData(res: Response){
        let body = res.json();
        return body.cast || {};
    }

    private extractMongoDbData(res: Response){
        let body = res.json();
        return body;
    }


    getFilms (filmCategory: string, pageList: number = 1) {
        return this.http.get(`${this.filmsUrl}&sort_by=${filmCategory}.desc&include_adult=false&include_video=false&page=${pageList}`)
                        .map(this.extractListData)
                        .catch(this.handleError);
    }

    getFilmById (filmId: string) {
        return this.http.get(this.filmUrlFirstPart + filmId + this.filmUrlSecondPart)
                        .map(this.extractItemData)
                        .catch(this.handleError);
    }

    getActors(filmId: string){
        return this.http.get(this.actorsUrlFirstPart + filmId + this.actorsUrlSecondPart)
                        .map(this.extractActorsData)
                        .catch(this.handleError);
    }

    /*-------------------------BACKEND----------------------------------------------*/

    getFilmsFromMdb () {
        return this.http.get("http://localhost:4200/getFilmsFromMdb")
                        .map(this.extractMongoDbData)
                        .catch(this.handleError);
    }

    saveFilm (id) {
        let favorite = {filmId: id, status: true};
        return this.http.post("http://localhost:4200/saveFilm", favorite)
                        .map(this.extractMongoDbData)
                        .catch(this.handleError);
    }

    deleteFilm (id) {
        let favorite = {filmId: id};
        return this.http.post("http://localhost:4200/deleteFilm", favorite)
                        .map(this.extractMongoDbData)
                        .catch(this.handleError);
    }
    //--------------------------------------------------------------------------------

    private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
        errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}