import { param, query, ValidationChain, validationResult } from 'express-validator'
import { NextFunction, Request, Response } from 'express'

export const validateGenReportByPeriod: ValidationChain[] = [
  query('startDate')
    .exists().withMessage('startDate is required')
    .isISO8601().withMessage('startDate must be a valid ISO 8601 date'),

  query('endDate')
    .exists().withMessage('endDate is required')
    .isISO8601().withMessage('endDate must be a valid ISO 8601 date')
    .custom((endDate, { req }) => {
      if (req.query && new Date(endDate) < new Date(req.query.startDate)) {
        throw new Error('endDate must be greater than or equal to startDate')
      }
      return true
    })
]

export const validateGenReportByMember = [
  param('member')
    .exists().withMessage('Member is required')
    .isString().withMessage('Member must be a string')
    .notEmpty().withMessage('Member cannot be empty')
]


export const validateGenReportMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() })
  } else {
    next()
  }
}