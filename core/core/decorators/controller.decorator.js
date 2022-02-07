"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
var typedi_1 = require("typedi");
require("reflect-metadata");
function Controller(url) {
    var arg = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg[_i - 1] = arguments[_i];
    }
    var service = (0, typedi_1.Service)();
    return function (constructor) {
        service(constructor);
        var path = url || '';
        Reflect.defineMetadata('custom:baseurl', path, constructor);
        Reflect.defineMetadata('custom:middlewares', arg, constructor);
    };
}
exports.Controller = Controller;
