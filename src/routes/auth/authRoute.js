import express from 'express';
import signupController from './authController';
import signupSchema from './authSchema';
import validateRoute from '../../tools/routeMiddleware';

const router = express.Router();

router.post('/signup', validateRoute(signupSchema), signupController);

export default router;
