"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var users_component_1 = require("./users.component");
var user_list_component_1 = require("./user-list/user-list.component");
var user_single_component_1 = require("./user-single/user-single.component");
var user_edit_component_1 = require("./user-edit/user-edit.component");
var user_create_component_1 = require("./user-create/user-create.component");
var auth_guard_service_1 = require(".././shared/guards/auth-guard.service");
var admin_guard_service_1 = require(".././shared/guards/admin-guard.service");
var can_deactivate_guard_service_1 = require("../shared/guards/can-deactivate-guard.service");
var routes = [
    {
        path: 'users',
        component: users_component_1.UsersComponent,
        canActivate: [auth_guard_service_1.AuthGuard],
        children: [
            {
                path: '',
                component: user_list_component_1.UserListComponent,
            },
            {
                path: 'create',
                component: user_create_component_1.UserCreateComponent,
                canActivate: [admin_guard_service_1.AdminGuard],
            },
            {
                path: ':id',
                component: user_single_component_1.UserSingleComponent
            },
            {
                path: ':id/edit',
                component: user_edit_component_1.UserEditComponent,
                canActivate: [admin_guard_service_1.AdminGuard],
                canDeactivate: [can_deactivate_guard_service_1.CanDeactivateGuard]
            }
        ]
    }
];
var UserRoutingModule = (function () {
    function UserRoutingModule() {
    }
    return UserRoutingModule;
}());
UserRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(routes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], UserRoutingModule);
exports.UserRoutingModule = UserRoutingModule;
//# sourceMappingURL=users-routing.module.js.map