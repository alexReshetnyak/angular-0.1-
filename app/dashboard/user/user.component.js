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
var UserComponent = (function () {
    function UserComponent(filmCardService) {
        this.filmCardService = filmCardService;
        this.filmList = [];
        window.scrollTo(0, 0);
    }
    UserComponent.prototype.ngOnInit = function () {
        this.filmCategory = "revenue";
        this.selectedValue = 1;
        this.pageList = 1;
        this.hideLoader = true;
        this.getFilms();
        this.filmCardService.getFilmsFromMdb().subscribe(function (data) {
            console.log(data);
        });
    };
    UserComponent.prototype.getFilms = function () {
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
    UserComponent.prototype.getMoreFilms = function () {
        this.pageList++;
        this.getFilms();
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user-cmp',
            moduleId: module.id,
            templateUrl: 'user.component.html',
            styleUrls: ['user.component.css'],
        }), 
        __metadata('design:paramtypes', [film_service_1.FilmService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map