"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Injectable = void 0;
var typedi_1 = require("typedi");
function Injectable() {
    var service = (0, typedi_1.Service)();
    return function (constructor) {
        service(constructor);
    };
}
exports.Injectable = Injectable;
