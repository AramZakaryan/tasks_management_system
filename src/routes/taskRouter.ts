import { Router } from 'express'
import { createTask, deleteTask, getAllTasks, getTaskById, updateTask } from '../controllers/taskController'


import {
  validateCreateTask,
  validateCreateTaskMiddleware,
  validateUpdateTask,
  validateUpdateTaskMiddleware,
  validateGetTaskById,
  validateGetTaskByIdMiddleware,
  validateDeleteTask,
  validateDeleteTaskMiddleware
} from '../validation/taskValidation'

export const taskRouter = Router({})

taskRouter.get('/', getAllTasks)
taskRouter.get('/:id', validateGetTaskById, validateGetTaskByIdMiddleware, getTaskById)
taskRouter.post('/', validateCreateTask, validateCreateTaskMiddleware, createTask)
taskRouter.put('/:id', validateUpdateTask, validateUpdateTaskMiddleware, updateTask)
taskRouter.delete('/:id', validateDeleteTask, validateDeleteTaskMiddleware, deleteTask)

