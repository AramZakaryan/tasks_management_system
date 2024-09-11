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
    const task = await taskRepository.findById(req.params.id)
    if (!task) {
      res.status(404).json({ error: 'Task not found' })
    } else {
      res.status(200).json(task)
    }
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving task' })
  }
}

export const createTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const newTask = await taskRepository.create(req.body)
    res.status(201).json(newTask)
  } catch (error) {
    res.status(500).json({ error: 'Error creating task' })
  }
}

export const updateTask = async (req: Request, res: Response) => {


  try {
    const id = req.params.id
    const body = req.body
    const updateFields: any = {}
    Object.keys(body).forEach((key) => {
      if (body[key] !== undefined) {
        updateFields[key] = body[key]
      }
    })
    await taskRepository.update(id, updateFields)
    res.json({ status: 'updated' })
  } catch (error) {
    res.status(404).json({ error: 'Error updating task status' })
  }
}

export const deleteTask = async (req: Request, res: Response) => {
  try {
    await taskRepository.delete(req.params.id);
    res.status(200).json({ status: 'deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete task' });
  }
};