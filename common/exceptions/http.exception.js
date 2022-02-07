"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpException = void 0;
var HttpException = /** @class */ (function () {
    function HttpException(object, code, message) {
        if (code === void 0) { code = 500; }
        if (message === void 0) { message = 'Internal Server Error'; }
        this._object = object;
        this._code = code;
        this._message = message;
    }
    Object.defineProperty(HttpException.prototype, "object", {
        get: function () { return this._object || undefined; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpException.prototype, "code", {
        get: function () { return this._code; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpException.prototype, "message", {
        get: function () { return this._message; },
        enumerable: false,
        configurable: true
    });
    HttpException.prototype.setStatus = function (status) {
        this._code = status;
        return this;
    };
    HttpException.prototype.setMessage = function (message) {
        this._message = message;
        return this;
    };
    return HttpException;
}());
exports.HttpException = HttpException;
