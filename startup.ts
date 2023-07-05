import express from 'express';
import { router } from './mvc/routes/DocenteRoute';

export class App{

    public server : express.Application;

    constructor(){
        this.server = express()
        this.middleware()
        this.routes()
        this.configEngineView()
    }

    private middleware(){
        this.server.use(express.json())
    } 

    private configEngineView(){
        this.server.set('view engine','ejs')
        this.server.set('views','./mvc/views')
    }

    private routes(){
        this.server.use(router)
    }
}
