import { Request, Response } from 'express'
import { taskRepository } from '../repositories/taskRepository'
import { Task } from '../types/task.types'
import { reportByPeriod } from '../serivices/reportService'


export const genReportByPeriod = async (req: Request, res: Response) => {
  const { startDate, endDate } = req.query
  try {
    const report = await reportByPeriod(new Date(startDate as string), new Date(endDate as string))
    res.status(200).json(report)
  } catch (error) {
    res.status(500).json({ error: 'Unable to generate report' })
  }
}