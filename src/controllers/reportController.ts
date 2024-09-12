import { Request, Response } from 'express'
import { reportByMember, reportByPeriod } from '../serivices/reportService'
import { RequestGenReportByMember, RequestGenReportByPeriod } from '../types/reportRequest.types'


export const genReportByPeriod = async (req: RequestGenReportByPeriod, res: Response) => {
  const { startDate, endDate } = req.query
  try {
    const report = await reportByPeriod(new Date(startDate), new Date(endDate))
    res.status(200).json(report)
  } catch (error) {
    res.status(500).json({ error: 'Unable to generate report' })
  }
}

export const genReportByMember = async (req: RequestGenReportByMember, res: Response) => {
  const { member } = req.params
  console.log(req.params)
  try {
    const report = await reportByMember(member)
    res.status(200).json(report)
  } catch (error) {
    res.status(500).json({ error: 'Unable to generate report' })
  }
}