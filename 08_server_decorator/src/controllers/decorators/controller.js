"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
// class|constructor decorator
function controller(routePrefix) {
    return function (target) {
        for (var key in target.prototype) {
            var routerHandler = target.prototype[key];
            var path = Reflect.getMetadata('path', target.prototype, key);
        }
    };
}
exports.controller = controller;
