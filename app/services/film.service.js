"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var FilmService = (function () {
    function FilmService(http) {
        this.http = http;
        this.filmsUrl = "https://api.themoviedb.org/3/discover/movie?api_key=4f6a92e0a096ef372e94f1dfb9403a29&language=ru";
        this.filmUrlFirstPart = "https://api.themoviedb.org/3/movie/";
        this.filmUrlSecondPart = "?api_key=4f6a92e0a096ef372e94f1dfb9403a29&language=ru";
        this.actorsUrlFirstPart = 'https://api.themoviedb.org/3/movie/';
        this.actorsUrlSecondPart = '/credits?api_key=4f6a92e0a096ef372e94f1dfb9403a29';
    }
    FilmService.prototype.extractListData = function (res) {
        var body = res.json();
        return body.results || {};
    };
    FilmService.prototype.extractItemData = function (res) {
        var body = res.json();
        return body || {};
    };
    FilmService.prototype.extractActorsData = function (res) {
        var body = res.json();
        return body.cast || {};
    };
    FilmService.prototype.extractMongoDbData = function (res) {
        var body = res.json();
        return body;
    };
    FilmService.prototype.getFilms = function (filmCategory, pageList) {
        if (pageList === void 0) { pageList = 1; }
        return this.http.get(this.filmsUrl + "&sort_by=" + filmCategory + ".desc&include_adult=false&include_video=false&page=" + pageList)
            .map(this.extractListData)
            .catch(this.handleError);
    };
    FilmService.prototype.getFilmById = function (filmId) {
        return this.http.get(this.filmUrlFirstPart + filmId + this.filmUrlSecondPart)
            .map(this.extractItemData)
            .catch(this.handleError);
    };
    FilmService.prototype.getActors = function (filmId) {
        return this.http.get(this.actorsUrlFirstPart + filmId + this.actorsUrlSecondPart)
            .map(this.extractActorsData)
            .catch(this.handleError);
    };
    /*-------------------------BACKEND----------------------------------------------*/
    FilmService.prototype.getFilmsFromMdb = function () {
        return this.http.get("http://localhost:4200/getFilmsFromMdb")
            .map(this.extractMongoDbData)
            .catch(this.handleError);
    };
    FilmService.prototype.saveFilm = function (id) {
        var favorite = { filmId: id, status: true };
        return this.http.post("http://localhost:4200/saveFilm", favorite)
            .map(this.extractMongoDbData)
            .catch(this.handleError);
    };
    FilmService.prototype.deleteFilm = function (id) {
        var favorite = { filmId: id };
        return this.http.post("http://localhost:4200/deleteFilm", favorite)
            .map(this.extractMongoDbData)
            .catch(this.handleError);
    };
    //--------------------------------------------------------------------------------
    FilmService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    FilmService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FilmService);
    return FilmService;
}());
exports.FilmService = FilmService;
//# sourceMappingURL=film.service.js.map