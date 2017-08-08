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
var film_service_1 = require('../../../services/film.service');
var ActorsComponent = (function () {
    function ActorsComponent(filmCardService) {
        this.filmCardService = filmCardService;
        this.actors = [];
    }
    ActorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filmCardService.getActors(this.id).subscribe(function (data) {
            if (data.length > 5) {
                for (var i = 0; i < 5; i++) {
                    _this.actors[i] = data[i];
                }
            }
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ActorsComponent.prototype, "id", void 0);
    ActorsComponent = __decorate([
        core_1.Component({
            selector: 'actors-cmp',
            moduleId: module.id,
            templateUrl: 'actors.component.html',
            styleUrls: ['actors.component.css'],
        }), 
        __metadata('design:paramtypes', [film_service_1.FilmService])
    ], ActorsComponent);
    return ActorsComponent;
}());
exports.ActorsComponent = ActorsComponent;
//# sourceMappingURL=actors.component.js.map