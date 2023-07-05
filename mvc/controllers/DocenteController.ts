import { Request, Response } from "express";
import Docente from '../models/Docente'

class DocenteController{

    private readonly _docente: Docente

    constructor(){
        this._docente = new Docente()
    }

    public Index =  (req: Request, res: Response) : any  => {
        res.render('index.ejs')
    }

    // public cadastrarDocente = (req: Request, res: Response) => {      
    //     this._docente.AddDocente(241202,"Leonardo")  
    //     res.json({status: "ok"})

    // }

}

export default DocenteController