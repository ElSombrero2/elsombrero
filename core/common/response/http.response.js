"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpResponse = void 0;
var HttpResponse = /** @class */ (function () {
    function HttpResponse(object, code) {
        if (code === void 0) { code = 200; }
        this._data = object || undefined;
        this._code = code;
    }
    Object.defineProperty(HttpResponse.prototype, "data", {
        get: function () { return this._data; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpResponse.prototype, "code", {
        get: function () { return this._code; },
        enumerable: false,
        configurable: true
    });
    HttpResponse.prototype.setStatus = function (status) {
        this._code = status;
        return this;
    };
    return HttpResponse;
}());
exports.HttpResponse = HttpResponse;
