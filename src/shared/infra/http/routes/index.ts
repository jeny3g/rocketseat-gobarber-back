import { Router } from 'express';

import appointmentsRouter from '@modules/appointments/infra/http/routes/appointments.routes';
import usersRouter from '@modules/users/infra/routes/http/users.routes';
import sessionsRouter from '@modules/users/infra/routes/http/sessions.routes';
import passwordRouter from '@modules/users/infra/routes/http/password.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);

export default routes;
