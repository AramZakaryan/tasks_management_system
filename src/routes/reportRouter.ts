import { Router } from 'express'
import { genReportByMember, genReportByPeriod } from '../controllers/reportController'
import {
  validateGenReportByMember,
  validateGenReportByPeriod,
  validateGenReportMiddleware
} from '../validation/reportValidation'

export const reportRouter = Router({})

/**
 * @swagger
 * /report/period:
 *   get:
 *     summary: Generate a report for a specific period
 *     parameters:
 *       - in: query
 *         name: startDate
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         description: The start date of the report period in ISO 8601 format
 *       - in: query
 *         name: endDate
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         description: The end date of the report period in ISO 8601 format
 *     responses:
 *       200:
 *         description: Report generated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReportByPeriod'
 *       400:
 *         description: Invalid input or error generating report
 */
reportRouter.get('/period', validateGenReportByPeriod, validateGenReportMiddleware, genReportByPeriod)

/**
 * @swagger
 * /report/member/{member}:
 *   get:
 *     summary: Generate a report for a specific member
 *     parameters:
 *       - in: path
 *         name: member
 *         required: true
 *         schema:
 *           type: string
 *         description: The member for whom the report is to be generated
 *     responses:
 *       200:
 *         description: Report generated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReportByMember'
 *       400:
 *         description: Invalid input or error generating report
 */
reportRouter.get('/member/:member', validateGenReportByMember, validateGenReportMiddleware, genReportByMember)

