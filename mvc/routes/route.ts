import { Router, Request, Response } from "express"
import Controller from '../controllers/Controller'

const controller = new Controller()
const router = Router()

router.get('/', controller.cadastrarCliente)

export { router }