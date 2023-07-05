
class Docente{

    private _id : number
    private _matricula: number 
    private _nome: string

    constructor(){       
        this._id = 0
        this._matricula = 0
        this._nome =  ""
    }

    get Id(){
        return this._id;
    }

    get Matricula(){
        return this._matricula;
    }

    set Matricula(value: number){
        this._matricula = value
    }

    get Nome(){
        return this._nome;
    }

    set Nome(value: string){
        this._nome = value
    }
 
    public AddDocente(Matricula: number, Nome: string){
        this._matricula = Matricula
        this._nome = Nome

        //Incluir na base de dados
    }

}

export default Docente

