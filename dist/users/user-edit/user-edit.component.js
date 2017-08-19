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
var user_service_1 = require("../../shared/services/user.service");
var router_1 = require("@angular/router");
var UserEditComponent = (function () {
    function UserEditComponent(service, activatedRoute, router) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.editInProgress = false;
        this.successMessage = '';
        this.errorMessage = '';
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.activatedRoute.snapshot.paramMap.get('id');
        console.log(id);
        this.filmsObservable = this.service.getFilms().subscribe(function (films) {
            _this.films = films;
            console.log(films, 'films');
            _this.film = _this.service.getFilm(id, _this.films);
        });
        this.editInProgress = true;
    };
    UserEditComponent.prototype.updateFilm = function () {
        var _this = this;
        this.successMessage = '';
        this.errorMessage = '';
        this.editInProgress = false;
        this.service.updateFilm(this.film);
        this.successMessage = 'Фильм успешно отредактирован.';
        setTimeout(function () {
            _this.router.navigate(['/users', _this.film.id]);
        }, 3000);
    };
    UserEditComponent.prototype.ngOnDestroy = function () {
        this.filmsObservable.unsubscribe();
    };
    return UserEditComponent;
}());
UserEditComponent = __decorate([
    core_1.Component({
        templateUrl: './app/users/user-edit/user-edit.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.ActivatedRoute,
        router_1.Router])
], UserEditComponent);
exports.UserEditComponent = UserEditComponent;
//# sourceMappingURL=user-edit.component.js.map