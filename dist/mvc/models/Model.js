"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Model {
    constructor() {
        this._Nome = "";
        this._Idade = 0;
        this._Profissao = "";
    }
    get Nome() {
        return this._Nome;
    }
    set Nome(value) {
        this._Nome = value;
    }
    get Idade() {
        return this._Idade;
    }
    set Idade(value) {
        this._Idade = value;
    }
    get Profissao() {
        return this._Profissao;
    }
    set Profissao(value) {
        this._Profissao = value;
    }
    registerPersonalInformation(Nome, Idade, Profissao) {
        this._Nome = Nome;
        this._Idade = Idade;
        this._Profissao = Profissao;
    }
    getPersonalInformation() {
        return {
            "nome": this._Nome,
            "idade": this._Idade,
            "profissao": this._Profissao
        };
    }
}
exports.default = Model;
