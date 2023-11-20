import { Router } from 'express';
import { all } from '../controllers/UserController';

const router = Router();

router.get('/', all);

export default router;
