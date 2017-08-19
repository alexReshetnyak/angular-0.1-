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
var UserCreateComponent = (function () {
    function UserCreateComponent(service, router) {
        this.service = service;
        this.router = router;
        this.film = { id: 0, title: '', overview: '', poster: '' };
        this.successMessage = '';
        this.errorMessage = '';
    }
    UserCreateComponent.prototype.ngOnInit = function () {
    };
    UserCreateComponent.prototype.createFilm = function () {
        var _this = this;
        this.successMessage = '';
        this.errorMessage = '';
        console.log(this.film);
        this.service.createFilm(this.film);
        this.successMessage = 'Фильм успешно создан!';
        setTimeout(function () {
            _this.router.navigate(['/users', { action: "created" }]);
        }, 3000);
    };
    return UserCreateComponent;
}());
UserCreateComponent = __decorate([
    core_1.Component({
        templateUrl: './app/users/user-create/user-create.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], UserCreateComponent);
exports.UserCreateComponent = UserCreateComponent;
//# sourceMappingURL=user-create.component.js.map