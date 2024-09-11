import { getDB } from '../utils/db'
import { Task } from '../models/taskModel'
import { ObjectId } from 'mongodb'

export const taskRepository = {
  async findAll(): Promise<any> {
    return await getDB().collection('tasks').find().toArray()
  },
  async findById(id: string): Promise<any> {
    try {
      const task = await getDB().collection('tasks').findOne({ _id: new ObjectId(id) })
      return task ?? undefined
    } catch {
      return undefined
    }
  },
  async create(task: Task): Promise<any> {
    const result = await getDB().collection('tasks').insertOne(task)
    return { status: 'created', _id: result.insertedId }
  },
  async update(id: string, updateFields: Omit<Task, '_id' | 'createdAt'>): Promise<any> {

    const result = await getDB().collection('tasks').updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...updateFields } }
    )
    if (result.matchedCount === 0) return undefined
    return { status: 'updated' }
  },
  async delete(taskId: string) {
    return await getDB().collection('tasks').deleteOne({ _id: new ObjectId(taskId) })
  }

}