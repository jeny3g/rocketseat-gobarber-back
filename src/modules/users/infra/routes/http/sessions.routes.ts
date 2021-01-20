import { Router } from 'express';

import SessionsController from '../controllers/SessionsController';

const passwordRouter = Router();
const sessionController = new SessionsController();

passwordRouter.post('/', sessionController.create);

export default passwordRouter;
