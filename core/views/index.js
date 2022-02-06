"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
var View = /** @class */ (function () {
    function View(_view, _data) {
        this._view = _view;
        this._data = _data;
    }
    Object.defineProperty(View.prototype, "view", {
        get: function () { return this._view; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(View.prototype, "data", {
        get: function () { return this._data; },
        enumerable: false,
        configurable: true
    });
    return View;
}());
exports.View = View;
