import { Router } from 'express'

import reportRouter from './reports.routes'

const routes = Router();

routes.use('/report', reportRouter)

export default routes
