import { Router } from 'express'
import { createTask, getAllTasks, getTaskById, updateTask } from '../controllers/taskController'

export const taskRouter = Router({})

taskRouter.get('/', getAllTasks)
taskRouter.post('/', createTask)
taskRouter.get('/:id', getTaskById)
taskRouter.put('/:id', updateTask)

