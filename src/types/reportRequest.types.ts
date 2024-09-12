import { Request } from 'express'

export type RequestGenReportByPeriod = Request<{}, {}, {}, { startDate: string, endDate: string }>

export type RequestGenReportByMember = Request<{ member: string }>
