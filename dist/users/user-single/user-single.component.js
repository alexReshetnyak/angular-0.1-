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
var router_1 = require("@angular/router");
var user_service_1 = require("../../shared/services/user.service");
var auth_service_1 = require("../../shared/services/auth.service");
var UserSingleComponent = (function () {
    function UserSingleComponent(activatedRoute, router, service, authService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.service = service;
        this.authService = authService;
    }
    UserSingleComponent.prototype.ngOnInit = function () {
        // статическое извлечение параметров, позходит не всегда
        //let id = +this.activatedRoute.snapshot.paramMap.get('id');
        //this.service.getUser(id)
        //  .subscribe(user => this.user = user);
        var _this = this;
        this.userRole = this.authService.userRole;
        // динамическое извлечение параметров
        this.activatedRoute.paramMap.forEach(function (params) {
            var id = +params.get("id");
            _this.filmsObservable = _this.service.getFilms().subscribe(function (films) {
                _this.films = films;
                console.log(films, 'films');
                _this.film = _this.service.getFilm(id, _this.films);
            });
        });
    };
    UserSingleComponent.prototype.deleteFilm = function () {
        this.service.deleteFilm(this.film);
        this.router.navigate(['/users', { action: "deleted" }]);
    };
    UserSingleComponent.prototype.ngOnDestroy = function () {
        this.filmsObservable.unsubscribe();
    };
    return UserSingleComponent;
}());
UserSingleComponent = __decorate([
    core_1.Component({
        styles: ["\n\n  "],
        templateUrl: './app/users/user-single/user-single.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        user_service_1.UserService,
        auth_service_1.AuthService])
], UserSingleComponent);
exports.UserSingleComponent = UserSingleComponent;
//# sourceMappingURL=user-single.component.js.map