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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
var UserService = (function () {
    function UserService(http) {
        var _this = this;
        this.http = http;
        this.usersUrl = 'https://reqres.in/api/users';
        this.films = new Subject_1.Subject();
        this.filmsArray = [];
        this.filmsUrl = "https://api.themoviedb.org/3/discover/movie?api_key=4f6a92e0a096ef372e94f1dfb9403a29&language=ru&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
        this.getFilmsFromApi().subscribe(function (data) {
            _this.setFilms(data);
            _this.filmsArray = data;
        });
    }
    UserService.prototype.getFilms = function () {
        var self = this;
        if (this.filmsArray.length > 0) {
            setTimeout(self.setFilms.bind(self, self.filmsArray), 0);
        }
        return this.films.asObservable();
    };
    UserService.prototype.setFilms = function (films) {
        this.films.next(films);
    };
    UserService.prototype.getFilm = function (id, films) {
        return films.filter(function (film) { return film.id == id; })[0];
    };
    UserService.prototype.getFilmsFromApi = function () {
        // добавляем токен
        var _this = this;
        return this.http.get(this.filmsUrl)
            .map(function (res) { return res.json().results; })
            .map(function (films) { return films.map(_this.toFilm); })
            .catch(this.handleError);
    };
    /**
     * Преобразовать данные "на лету" в тот формат который нужен нам
     */
    UserService.prototype.toFilm = function (film) {
        return {
            id: film.id,
            title: film.title,
            overview: film.overview,
            poster: film.poster_path,
        };
    };
    UserService.prototype.createFilm = function (film) {
        var id = 0;
        this.filmsArray.forEach(function (filmArray) {
            if (+filmArray.id >= id) {
                id = +filmArray.id;
            }
        });
        film.id = (id + 1);
        this.filmsArray = [film].concat(this.filmsArray);
        this.setFilms(this.filmsArray);
    };
    UserService.prototype.updateFilm = function (film) {
        this.filmsArray.forEach(function (filmArray) {
            if (filmArray.id === film.id) {
                filmArray = film;
            }
        });
    };
    UserService.prototype.deleteFilm = function (film) {
        var index = this.filmsArray.indexOf(film);
        if (index >= 0) {
            this.filmsArray.splice(index, 1);
        }
    };
    UserService.prototype.handleError = function (err) {
        var errMessage;
        if (err instanceof http_1.Response) {
            var body = err.json() || '';
            var error = body.error || JSON.stringify(body);
            errMessage = err.status + " - " + (err.statusText || '') + " " + error;
        }
        else {
            errMessage = err.message ? err.message : err.toString();
        }
        return Observable_1.Observable.throw(errMessage);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map