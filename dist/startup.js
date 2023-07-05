"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const DocenteRoute_1 = require("./mvc/routes/DocenteRoute");
class App {
    constructor() {
        this.server = (0, express_1.default)();
        this.middleware();
        this.routes();
        this.configEngineView();
    }
    middleware() {
        this.server.use(express_1.default.json());
    }
    configEngineView() {
        this.server.set('view engine', 'ejs');
        this.server.set('views', './mvc/views');
    }
    routes() {
        this.server.use(DocenteRoute_1.router);
    }
}
exports.App = App;
