
class Model{

    private _Nome : string = ""
    private _Idade: number = 0
    private _Profissao: string = ""

    constructor(){        
    }

    get Nome(){
        return this._Nome;
    }

    set Nome(value: string){
        this._Nome = value
    }

    get Idade(){
        return this._Idade;
    }

    set Idade(value: number){
        this._Idade = value
    }

    get Profissao(){
        return this._Profissao;
    }

    set Profissao(value: string){
        this._Profissao = value
    }

    public registerPersonalInformation(Nome: string, Idade: number, Profissao: string){
        this._Nome = Nome
        this._Idade = Idade
        this._Profissao = Profissao
    }


    public getPersonalInformation(){
        return {
            "nome": this._Nome,
            "idade": this._Idade,
            "profissao": this._Profissao
        }
    }

}

export default Model

