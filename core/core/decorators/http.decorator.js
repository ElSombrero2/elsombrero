"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = exports.Patch = exports.Put = exports.Post = exports.Get = void 0;
require("reflect-metadata");
var value = function (url, callback, method, middlewares) {
    return { url: url, callback: callback, method: method, middlewares: __spreadArray([], middlewares, true) };
};
function Get(url) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return function (target, key) {
        Reflect.defineMetadata("router:".concat(key.toString()), value(url, target[key], 'get', args), target.constructor);
    };
}
exports.Get = Get;
function Post(url) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return function (target, key) {
        Reflect.defineMetadata("router:".concat(key.toString()), value(url, target[key], 'post', args), target.constructor);
    };
}
exports.Post = Post;
function Put(url) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return function (target, key) {
        Reflect.defineMetadata("router:".concat(key.toString()), value(url, target[key], 'put', args), target.constructor);
    };
}
exports.Put = Put;
function Patch(url) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return function (target, key) {
        Reflect.defineMetadata("router:".concat(key.toString()), value(url, target[key], 'patch', args), target.constructor);
    };
}
exports.Patch = Patch;
function Delete(url) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return function (target, key) {
        Reflect.defineMetadata("router:".concat(key.toString()), value(url, target[key], 'delete', args), target.constructor);
    };
}
exports.Delete = Delete;
