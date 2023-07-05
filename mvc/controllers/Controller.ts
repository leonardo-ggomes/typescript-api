import { Request, Response } from "express";
import Model from '../models/Model'

class Controller{

    private readonly _model: Model

    constructor(){
        this._model = new Model()
    }

    public cadastrarCliente = (req: Request, res: Response) => {      
        this._model.registerPersonalInformation('Leonardo', 24, 'Software Engineering')  
        res.json(this._model.getPersonalInformation())

    }

}

export default Controller