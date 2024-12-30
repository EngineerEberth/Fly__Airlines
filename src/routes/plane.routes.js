import { Router } from 'express';
import { authRequired } from '../middlewares/valideToken.js';
import { getAviones, getAvion, createAvion, deleteAvion, updateAvion } from '../controllers/plane.controller.js';

const router = Router();

router.get('/aviones', authRequired, getAviones);
router.get('/aviones/:id', authRequired, getAvion);
router.post('/aviones', authRequired, createAvion);
router.delete('/aviones/:id', authRequired, deleteAvion);
router.put('/aviones/:id', authRequired, updateAvion);

export default router;
