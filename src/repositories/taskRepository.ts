import { client, getDB } from '../utils/db'
import { Task } from '../models/taskModel'

export const taskRepository = {
  async findAll(): Promise<any> {
    return await client.db('tasks_db').collection('tasks').find().toArray()
  }
}