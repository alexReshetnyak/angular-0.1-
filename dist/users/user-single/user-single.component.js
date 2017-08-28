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
var UserSingleComponent = (function () {
    function UserSingleComponent(activatedRoute, router, service) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.service = service;
    }
    UserSingleComponent.prototype.ngOnInit = function () {
        // статическое извлечение параметров, позходит не всегда
        //let id = +this.activatedRoute.snapshot.paramMap.get('id');
        //this.service.getUser(id)
        //  .subscribe(user => this.user = user);
        var _this = this;
        // динамическое извлечение параметров
        this.activatedRoute.paramMap.forEach(function (params) {
            var id = params.get("id");
            _this.service.getUser(id)
                .subscribe(function (user) {
                if (user) {
                    _this.user = user;
                }
            });
        });
    };
    UserSingleComponent.prototype.deleteUser = function () {
        var _this = this;
        this.service.deleteUser(this.user.id)
            .subscribe(function (data) {
            _this.router.navigate(['/users', { action: "deleted" }]);
        });
    };
    return UserSingleComponent;
}());
UserSingleComponent = __decorate([
    core_1.Component({
        templateUrl: './app/users/user-single/user-single.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        user_service_1.UserService])
], UserSingleComponent);
exports.UserSingleComponent = UserSingleComponent;
//# sourceMappingURL=user-single.component.js.map