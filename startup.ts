import express from 'express';
import { router } from './mvc/routes/route';

export class App{

    public server : express.Application;

    constructor(){
        this.server = express()
        this.middleware()
        this.routes()
    }

    private middleware(){
        this.server.use(express.json())
    } 

    private routes(){
        this.server.use(router)
    }
}
