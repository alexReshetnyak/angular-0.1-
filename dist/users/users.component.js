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
var user_service_1 = require("../shared/services/user.service");
//import { DemoService } from '../shared/services/demo.service';
var router_1 = require("@angular/router");
var UsersComponent = (function () {
    function UsersComponent(service, activatedRoute) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.showCreateMessage = false;
        this.showDeleteMessage = false;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.forEach(function (params) {
            var action = params.get("action");
            if (action == "created") {
                _this.showCreateMessage = true;
                _this.clearMessages();
            }
            if (action == "deleted") {
                _this.showDeleteMessage = true;
                _this.clearMessages();
            }
        });
    };
    UsersComponent.prototype.clearMessages = function () {
        var _this = this;
        setTimeout(function () {
            _this.showCreateMessage = false;
            _this.showDeleteMessage = false;
        }, 5000);
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        selector: 'my-users',
        templateUrl: './app/users/users.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.ActivatedRoute])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map