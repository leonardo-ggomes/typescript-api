"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Docente {
    constructor() {
        this._id = 0;
        this._matricula = 0;
        this._nome = "";
    }
    get Id() {
        return this._id;
    }
    get Matricula() {
        return this._matricula;
    }
    set Matricula(value) {
        this._matricula = value;
    }
    get Nome() {
        return this._nome;
    }
    set Nome(value) {
        this._nome = value;
    }
    AddDocente(Matricula, Nome) {
        this._matricula = Matricula;
        this._nome = Nome;
        //Incluir na base de dados
    }
}
exports.default = Docente;
