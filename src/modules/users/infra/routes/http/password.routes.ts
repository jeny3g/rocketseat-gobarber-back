import { Router } from 'express';

import ForgotPasswordController from '../controllers/ForgotPasswordController';
import ResetPasswordController from '../controllers/ResetPasswordController';


const sessionsRouter = Router();
const passwordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();

sessionsRouter.post('/forgot', passwordController.create);

sessionsRouter.post('/reset', resetPasswordController.create);

export default sessionsRouter;
