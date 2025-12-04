import { Router } from 'express';
import { getPublicTrainings } from '../controllers/trainingController.js';

const router = Router();

router.get('/trainings', getPublicTrainings);

export default router;
