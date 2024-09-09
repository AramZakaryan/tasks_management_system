import { client, getDB } from '../utils/db'
import { Task } from '../models/taskModel'
import { ObjectId } from 'mongodb'

export const taskRepository = {
  async findAll(): Promise<any> {
    return await client.db('tasks_db').collection('tasks').find().toArray()
  },
  async findById(id: string): Promise<any> {
    return await client.db('tasks_db').collection('tasks').findOne({ _id: new ObjectId(id) })
  }
}