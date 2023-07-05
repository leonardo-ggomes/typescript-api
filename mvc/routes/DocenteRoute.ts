import { Router, Request, Response } from "express"
import DocenteController from '../controllers/DocenteController'

const docenteController = new DocenteController()
const router = Router()

router.get('/', docenteController.Index)

export { router }