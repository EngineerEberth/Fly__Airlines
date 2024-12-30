import { Router } from 'express';
import { authRequired } from '../middlewares/valideToken.js';
import { getPilotos, getPiloto, createPiloto, deletePiloto, updatePiloto } from '../controllers/pilot.controller.js';

const router = Router();

router.get('/pilotos', authRequired, getPilotos);
router.get('/pilotos/:id', authRequired, getPiloto);
router.post('/pilotos', authRequired, createPiloto);
router.delete('/pilotos/:id', authRequired, deletePiloto);
router.put('/pilotos/:id', authRequired, updatePiloto);

export default router;
