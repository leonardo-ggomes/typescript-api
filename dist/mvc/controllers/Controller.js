"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Model_1 = __importDefault(require("../models/Model"));
class Controller {
    constructor() {
        this.cadastrarCliente = (req, res) => {
            this._model.registerPersonalInformation('Leonardo', 24, 'Software Engineering');
            res.json(this._model.getPersonalInformation());
        };
        this._model = new Model_1.default();
    }
}
exports.default = Controller;
