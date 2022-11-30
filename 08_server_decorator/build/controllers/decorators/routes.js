"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
require("reflect-metadata");
function get(path) {
    // this is the decorator factory, it sets up
    // the returned decorator function
    return function (target, key, desc) {
        // this is the DECORATOR
        // it will be applied for a method and
        // path: function argument, key: method name 
        console.log('get decorator:', path, key);
        Reflect.defineMetadata('path', path, target, key);
    };
}
exports.get = get;
