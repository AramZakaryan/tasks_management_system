import { Router, Request, Response } from 'express'
import { getAllTasks, getTaskById } from '../controllers/taskController'

export const taskRouter = Router({})

taskRouter.get('/', getAllTasks)

taskRouter.get('/:id', getTaskById)
taskRouter.post('/') /////////// createTask
taskRouter.put('/:id/status')//////////// updateTaskStatus

