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
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.userUrl = '/api/users';
    }
    UserService.prototype.getUsers = function () {
        var _this = this;
        var headers = new http_1.Headers();
        var token = localStorage.getItem('auth_token');
        //headers.set('Content-Type', 'application/json');
        //headers.set('Authorization', `Bearer ${token}`);
        var params = new http_1.URLSearchParams();
        params.set("per_page", "9");
        return this.http.get(this.userUrl)
            .map(function (res) { return res.json(); })
            .map(function (users) { return users.map(_this.toUser); })
            .catch(this.handleError);
    };
    /**
     * Преобразовать данные "на лету" в тот формат который нужен нам
     */
    UserService.prototype.toUser = function (user) {
        //console.log(user);
        return {
            id: user._id,
            name: user.first_name,
            last_name: user.last_name,
            avatar: user.avatar
        };
    };
    UserService.prototype.toDBUser = function (user) {
        return {
            first_name: user.name,
            last_name: user.last_name,
            avatar: user.avatar,
        };
    };
    UserService.prototype.getUser = function (id) {
        //console.log(id, 'service getUser');
        return this.http.get(this.userUrl + "/" + id)
            .map(function (res) { return res.json(); })
            .map(this.toUser)
            .catch(this.handleError);
    };
    UserService.prototype.createUser = function (user) {
        //return this.http.post(this.usersUrl, user)
        return this.http.post(this.userUrl, this.toDBUser(user))
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.updateUser = function (user) {
        //return this.http.put(`${this.usersUrl}/${user.id}`, user)
        return this.http.put(this.userUrl + "/" + user.id, this.toDBUser(user))
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.delete(this.userUrl + "/" + id)
            .catch(this.handleError);
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