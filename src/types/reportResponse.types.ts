import { Response } from 'express'
import { ReportByMember, ReportByPeriod } from './report.types'

export type ResponseGenReportByPeriod = Response<ReportByPeriod | { error: 'Unable to generate report' }>

export type ResponseGenReportByMember = Response<ReportByMember | { error: 'Unable to generate report' }>

