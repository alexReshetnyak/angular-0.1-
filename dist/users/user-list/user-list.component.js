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
var UserListComponent = (function () {
    function UserListComponent(activatedRoute, userService, authService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.authService = authService;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filmsObservable = this.userService.getFilms().subscribe(function (films) {
            _this.films = films;
            _this.userRole = _this.authService.userRole;
            console.log(films);
        });
    };
    UserListComponent.prototype.ngOnDestroy = function () {
        this.filmsObservable.unsubscribe();
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    core_1.Component({
        styles: ["\n    .film--wrap{\n      margin-bottom: 20px;\n    }\n    .user-card { cursor: pointer;\n                  width: 100%;\n                  height: 700px;\n                  overflow: hidden;}\n    img{ width: 250px;}\n    h2 { margin-bottom: 20px;} \n    h2>div{ font-size: 12px; line-height: 16px;}\n    .jumbotron {padding: 30px;}\n    \n  "],
        templateUrl: './app/users/user-list/user-list.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        user_service_1.UserService,
        auth_service_1.AuthService])
], UserListComponent);
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map