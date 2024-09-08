import { Request, Response } from 'express'
import { taskRepository } from '../repositories/taskRepository'


export const getAllTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const tasks = await taskRepository.findAll()
    res.status(200).json(tasks)
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving tasks' })
  }
}

