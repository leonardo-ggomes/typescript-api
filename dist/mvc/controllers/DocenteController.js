"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Docente_1 = __importDefault(require("../models/Docente"));
class DocenteController {
    constructor() {
        this.Index = (req, res) => {
            res.render('index.ejs');
        };
        this._docente = new Docente_1.default();
    }
}
exports.default = DocenteController;
