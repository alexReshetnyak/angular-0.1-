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
var film_service_1 = require('../../services/film.service');
var HomeComponent = (function () {
    function HomeComponent(filmCardService) {
        this.filmCardService = filmCardService;
        this.filmList = [];
        window.scrollTo(0, 0);
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.filmCategory = "popularity";
        this.selectedValue = 1;
        this.pageList = 1;
        this.hideLoader = true;
        this.getFilms();
    };
    HomeComponent.prototype.getFilms = function () {
        var _this = this;
        this.hideLoader = false;
        if (!this.filmCategory) {
            return;
        }
        if (this.pageList === 1) {
            this.filmList = [];
        }
        this.filmCardService.getFilms(this.filmCategory, this.pageList).subscribe(function (data) {
            _this.hideLoader = true;
            if (data.length > 0) {
                _this.filmList = _this.filmList.concat(data);
            }
        }, function (error) { return console.log(error); });
    };
    HomeComponent.prototype.getMoreFilms = function () {
        this.pageList++;
        this.getFilms();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home-cmp',
            moduleId: module.id,
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
        }), 
        __metadata('design:paramtypes', [film_service_1.FilmService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map