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
var UserListResolve = (function () {
    function UserListResolve(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    UserListResolve.prototype.resolve = function () {
        //let username = route.params['username'];
        //this.userService.getUsers()
        //    .subscribe(users => this.users = users);
        return this.userService.getUsers().subscribe(function (user) {
            if (user) {
                return user;
            }
            else {
                // navigate the user back to the about page
                //this.router.navigate(['/about']);
                return false;
            }
        });
    };
    UserListResolve = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], UserListResolve);
    return UserListResolve;
}());
exports.UserListResolve = UserListResolve;
//# sourceMappingURL=user-list-resolver.service.js.map