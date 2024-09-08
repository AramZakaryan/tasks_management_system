import { Router, Request, Response } from 'express'
import { getAllTasks } from '../controllers/taskController'

export const taskRouter = Router({})

taskRouter.get('/', getAllTasks)

taskRouter.post('/') /////////// createTask
taskRouter.get('/:id') ////////////  getTaskById
taskRouter.put('/:id/status')//////////// updateTaskStatus

