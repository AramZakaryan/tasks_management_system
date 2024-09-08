import { Router, Request, Response } from 'express'

export const tasksRouter = Router({})

tasksRouter.get('/', (req, res) => {
  res.status(200).json({ message: 'welcome to api/tasks' })
}) //////////////// forDel

tasksRouter.post('/') /////////// createTask
tasksRouter.get('/:id') ////////////  getTaskById
tasksRouter.put('/:id/status')//////////// updateTaskStatus

