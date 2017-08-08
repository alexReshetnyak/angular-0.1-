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
var router_1 = require('@angular/router');
var film_service_1 = require('../../../services/film.service');
var RatingComponent = (function () {
    function RatingComponent(route, router, filmCardService) {
        this.route = route;
        this.router = router;
        this.filmCardService = filmCardService;
        this.leftProgressDeg = 0;
        this.rightProgressDeg = 0;
        this.colorProgress = '';
    }
    RatingComponent.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            this.rating = changes[key].currentValue;
        }
        this.makeLoader();
    };
    RatingComponent.prototype.ngOnInit = function () {
    };
    RatingComponent.prototype.makeLoader = function () {
        var self = this;
        var rating = this.rating ? this.rating * 10 : 0;
        if (rating > 70) {
            this.colorProgress = '#21D07A';
        }
        else if (rating > 60) {
            this.colorProgress = '#D2D531';
        }
        else {
            this.colorProgress = '#ff3300';
        }
        this.startLoader(self, rating);
    };
    RatingComponent.prototype.startLoader = function (self, rating) {
        setTimeout(function () {
            if (rating > 0) {
                if (self.rightProgressDeg >= 180) {
                    self.leftProgressDeg = self.leftProgressDeg + 10.8;
                    rating = rating - 3;
                    self.startLoader(self, rating);
                }
                else {
                    if (self.rightProgressDeg >= 169) {
                        self.rightProgressDeg = 180;
                    }
                    else {
                        self.rightProgressDeg = self.rightProgressDeg + 10.8;
                    }
                    rating = rating - 3;
                    self.startLoader(self, rating);
                }
            }
        }, 30);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RatingComponent.prototype, "rating", void 0);
    RatingComponent = __decorate([
        core_1.Component({
            selector: 'rating-cmp',
            moduleId: module.id,
            templateUrl: 'rating.component.html',
            styleUrls: ['rating.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, film_service_1.FilmService])
    ], RatingComponent);
    return RatingComponent;
}());
exports.RatingComponent = RatingComponent;
//# sourceMappingURL=rating.component.js.map