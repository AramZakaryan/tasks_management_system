import { body, param, validationResult, ValidationChain } from 'express-validator'
import { Request, Response, NextFunction } from 'express'

export const validateCreateTask: ValidationChain[] = [
  body('title').isString().withMessage('Title must be a string').notEmpty().withMessage('Title is required'),
  body('description').isString().withMessage('Description must be a string').optional(),
  body('assignedMember').isString().withMessage('Assigned member must be a string').notEmpty().withMessage('Assigned member is required'),
  body('status').isIn(['pending', 'in-progress', 'completed']).withMessage('Invalid status').optional(),
  body('priority').isIn(['low', 'medium', 'high']).withMessage('Invalid priority').optional(),
  body('dueDate').isISO8601().toDate().withMessage('Due date must be a valid date').optional()
]

export const validateCreateTaskMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() })
  } else {
    next()
  }
}

export const validateUpdateTask: ValidationChain[] = [
  param('id').isMongoId().withMessage('Invalid task ID'),
  body('title').isString().optional(),
  body('description').isString().optional(),
  body('assignedMember').isString().optional(),
  body('status').isIn(['pending', 'in-progress', 'completed']).optional(),
  body('priority').isIn(['low', 'medium', 'high']).optional(),
  body('dueDate').isISO8601().toDate().optional()
]

export const validateUpdateTaskMiddleware = (req: Request, res: Response, next: NextFunction): void => {

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() })
  } else {
    next()
  }
}

export const validateGetTaskById: ValidationChain[] = [
  param('id').isMongoId().withMessage('Invalid task ID')
]

export const validateGetTaskByIdMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() })
  } else {
    next()
  }
}

export const validateDeleteTask: ValidationChain[] = [
  param('id').isMongoId().withMessage('Invalid task ID')
]

export const validateDeleteTaskMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() })
  } else {
    next()
  }
}
