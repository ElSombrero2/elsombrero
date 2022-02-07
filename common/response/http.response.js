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
    HttpResponse.StatusCode = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ContentDifferent: 210,
        IMUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        SwitchProxy: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        TooManyRedirects: 310
    };
    return HttpResponse;
}());
exports.HttpResponse = HttpResponse;
