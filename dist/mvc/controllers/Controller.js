"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Model_1 = __importDefault(require("../models/Model"));
class Controller {
    constructor() {
        this._model = new Model_1.default();
    }
    cadastrarCliente(req, res) {
        // let model: Model = new Model()
        // model.registerPersonalInformation('Leonardo', 24, 'Software Engineering')  
        // res.json(model.getPersonalInformation())
        this._model.registerPersonalInformation('Leonardo', 24, 'Software Engineering');
        res.json(this._model.getPersonalInformation());
    }
}
exports.default = Controller;
