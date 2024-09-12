import { Router } from 'express'
import { genReportByMember, genReportByPeriod } from '../controllers/reportController'

export const reportRouter = Router({})

reportRouter.get('/period', genReportByPeriod)
reportRouter.get('/member/:member', genReportByMember)

