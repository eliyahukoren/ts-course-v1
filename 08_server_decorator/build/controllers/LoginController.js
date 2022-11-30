"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var templates_1 = require("../utils/templates");
var routes_1 = require("./decorators/routes");
var controller_1 = require("./decorators/controller");
var Routes;
(function (Routes) {
    Routes["LOGIN"] = "/login";
    Routes["HOME"] = "/";
    Routes["LOGOUT"] = "/logout";
    Routes["PROTECTED"] = "/protected";
})(Routes || (Routes = {}));
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.getLogin = function (req, res) {
        res.send((0, templates_1.renderTemplate)(templates_1.TemplateType.LOGIN_FORM));
    };
    __decorate([
        (0, routes_1.get)('/login')
    ], LoginController.prototype, "getLogin", null);
    LoginController = __decorate([
        (0, controller_1.controller)('/auth')
    ], LoginController);
    return LoginController;
}());
console.log('Hi There');
