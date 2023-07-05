"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const route_1 = require("./mvc/routes/route");
class App {
    constructor() {
        this.server = (0, express_1.default)();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.server.use(express_1.default.json());
    }
    routes() {
        this.server.use(route_1.router);
    }
}
exports.App = App;
