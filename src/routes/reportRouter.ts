import { Router } from 'express'
import { genReportByPeriod } from '../controllers/reportController'

export const reportRouter = Router({})

reportRouter.get('/period', genReportByPeriod)

