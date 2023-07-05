import { Request, Response } from "express";
import Model from '../models/Model'

class Controller{

    public cadastrarCliente(req: Request, res: Response){
       
        let model: Model = new Model()
        model.registerPersonalInformation('Leonardo', 24, 'Software Engineering')  
        res.json(model.getPersonalInformation())

    }

}

export default Controller