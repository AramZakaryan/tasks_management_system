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

export const getTaskById = async (req: Request, res: Response): Promise<void> => {
  try {
    const task = await taskRepository.findById(req.params.id);
    if (!task) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      res.status(200).json(task);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving task' });
  }
};
