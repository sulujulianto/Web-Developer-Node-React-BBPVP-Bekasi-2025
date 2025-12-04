import { Router } from 'express';
import { protect } from '../middleware/auth.js';
import { trainingUpload } from '../middleware/upload.js';
import { listTrainings, createTraining, updateTraining, deleteTraining } from '../controllers/trainingController.js';

const router = Router();

router.use(protect);

router.get('/', listTrainings);
router.post('/', trainingUpload.single('image'), createTraining);
router.put('/:id', trainingUpload.single('image'), updateTraining);
router.delete('/:id', deleteTraining);

export default router;
