import {Router} from 'express'
import {authRequired} from '../middlewares/valideToken.js'
import { getDestinos,getDestino,createDestino,deleteDestino,updateDestino } from "../controllers/destiny.controller.js";
const router = Router()
router.get('/destinos', authRequired, getDestinos)
router.get('/destinos/:id', authRequired, getDestino)
router.post('/destinos', authRequired, createDestino)
router.delete('/destinos/:id', authRequired, deleteDestino)
router.put('/destinos/:id', authRequired, updateDestino)
export default router