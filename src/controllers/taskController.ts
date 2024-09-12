import { taskRepository } from '../repositories/taskRepository'
import {
  RequestCreateTask,
  RequestDeleteTask,
  RequestGetAllTasks,
  RequestGetTaskById,
  RequestUpdateTask
} from '../types/request.types'
import {
  ResponseCreateTask,
  ResponseDeleteTask,
  ResponseGetAllTasks,
  ResponseGetTaskById,
  ResponseUpdateTask
} from '../types/response.types'


export const getAllTasks = async (req: RequestGetAllTasks, res: ResponseGetAllTasks): Promise<void> => {
  try {
    const tasks = await taskRepository.findAll()
    res.status(200).json(tasks)
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving tasks' })
  }
}

export const getTaskById = async (req: RequestGetTaskById, res: ResponseGetTaskById): Promise<void> => {

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

export const createTask = async (req: RequestCreateTask, res: ResponseCreateTask): Promise<void> => {
  try {
    const _id = await taskRepository.create(req.body)
    if (_id) {
      res.status(201).json({ result: 'created', _id })
    }
  } catch (error) {
    res.status(500).json({ error: 'Error creating task' })
  }
}

export const updateTask = async (req: RequestUpdateTask, res: ResponseUpdateTask): Promise<void> => {
  try {
    const id = req.params.id
    const body = req.body

    const updateFields: any = {}
    Object.keys(body).forEach((key) => {
      if (body[key as keyof typeof body] !== undefined) {
        updateFields[key] = body[key as keyof typeof body]
      }
    })

    const result = await taskRepository.update(id, updateFields)
    if (result) {
      res.status(200).json({ result: 'updated' })
    } else {
      res.status(404).json({ error: 'Task not found' })
    }

  } catch (error) {
    res.status(404).json({ error: 'Error updating task status' })
  }
}

export const deleteTask = async (req: RequestDeleteTask, res: ResponseDeleteTask): Promise<void> => {
  try {
    const result = await taskRepository.delete(req.params.id)

    if (result) {
      res.status(200).json({ result: 'deleted' })
    } else {
      res.status(404).json({ error: 'Task not found' })
    }

  } catch (error) {
    res.status(500).json({ error: 'Error unable to delete task' })
  }
}



