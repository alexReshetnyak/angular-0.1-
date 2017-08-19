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
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.authUrl = 'https://reqres.in/api';
        this.loggedIn = false;
        this.adminLogin = "admin";
        this.adminPassword = "password";
        this.userLogin = 'user';
        this.userPassword = 'userpassword';
        this.userRole = "";
        // при обновлении страницы смотрим в localStorage чтоб проверить есть ли токен
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    AuthService.prototype.isLoggedIn = function () {
        this.userRole = localStorage.getItem('auth_token');
        return this.loggedIn;
    };
    AuthService.prototype.login = function (username, password) {
        if (username === this.adminLogin && password === this.adminPassword) {
            this.userRole = 'admin';
            localStorage.setItem('auth_token', this.userRole);
            this.loggedIn = true;
        }
        else if (username === this.userLogin && password === this.userPassword) {
            this.userRole = 'user';
            localStorage.setItem('auth_token', this.userRole);
            this.loggedIn = true;
        }
        return this.userRole;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    };
    AuthService.prototype.handleError = function (err) {
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
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map