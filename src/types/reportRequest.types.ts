import { Request } from 'express'
import { TaskFromClient } from './task.types'
import { genReportByMember, genReportByPeriod } from '../controllers/reportController'

export type RequestGenReportByPeriod = Request<{}, {}, {}, { startDate: string, endDate: string }>

export type RequestGenReportByMember = Request<{ member: string }>

export type RequestCreateTask = Request<{}, {}, TaskFromClient>

export type RequestUpdateTask = Request<{ id: string }, {}, TaskFromClient>

export type RequestDeleteTask = Request<{ id: string }>