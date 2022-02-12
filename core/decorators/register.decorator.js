"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
exports.Register = void 0;
require("reflect-metadata");
var views_1 = require("../views");
var typedi_1 = require("typedi");
var utils_1 = require("./utils");
function Register(obj) {
    obj.handlers.map(function (handler) {
        obj.context.use(function (req, res, next) {
            var m = new handler();
            m.handle((0, utils_1.createContext)(req, res, next));
        });
    });
    return function (target) {
        var _this = this;
        obj.services.map(function (s) { return typedi_1.default.get(s); });
        obj.controllers.map(function (constructor) {
            var keys = Reflect.getMetadataKeys(constructor)
                .filter(function (key) {
                if (key.startsWith('router:'))
                    return key;
            });
            var path = Reflect.getMetadata('custom:baseurl', constructor);
            var middlewares = Reflect.getMetadata('custom:middlewares', constructor);
            var instance = typedi_1.default.get(constructor);
            var msg = "----------------[Controller: ".concat(constructor.name, "]----------------");
            console.log("\u001B[34m".concat(msg, "\u001B[0m"));
            keys.map(function (key) { return __awaiter(_this, void 0, void 0, function () {
                var data, fun;
                var _this = this;
                return __generator(this, function (_a) {
                    data = Reflect.getMetadata(key, constructor);
                    fun = obj.context[data.method];
                    console.log("\u001B[33m".concat(data.method.toUpperCase(), " ").concat(path + data.url, "\u001B[0m"));
                    fun.apply(obj.context, __spreadArray(__spreadArray(__spreadArray([(path + data.url !== '') ? path + data.url : '/'], (0, utils_1.createMiddleWares)(middlewares), true), (0, utils_1.createMiddleWares)(data.middlewares), true), [function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
                            var result, e_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, data.callback.apply(instance, [(0, utils_1.createContext)(req, res, next)])];
                                    case 1:
                                        result = _a.sent();
                                        if ((result === null || result === void 0 ? void 0 : result.constructor.name) === 'HttpResponse')
                                            res.status(result.code).json(result.data);
                                        else if (result instanceof views_1.View)
                                            res.render(result.view, result.data);
                                        else
                                            res.json(result);
                                        return [3 /*break*/, 3];
                                    case 2:
                                        e_1 = _a.sent();
                                        res.status(e_1.code || 500).json({
                                            status: e_1.code || 500,
                                            data: e_1.object,
                                            message: e_1.message || 'Internal Server Error.'
                                        });
                                        return [3 /*break*/, 3];
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); }], false));
                    return [2 /*return*/];
                });
            }); });
            console.log("\u001B[34m".concat('-'.repeat(msg.length), "\u001B[0m"));
        });
    };
}
exports.Register = Register;
