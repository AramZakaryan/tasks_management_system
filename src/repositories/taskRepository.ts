import { getDB } from '../db/db'
import { TaskFromClient } from '../types/task.types'
import { ObjectId } from 'mongodb'

export const taskRepository = {
  async findAll(){
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

  async create(task: TaskFromClient): Promise<ObjectId> {
    const newTask: TaskFromClient & { completedAt?: Date, createdAt?: Date } = {
      ...task, createdAt: new Date(),
      priority: task.priority || 'low',
      status: task.status || 'pending'
    }

    if (task.status === 'completed') newTask.completedAt = new Date()

    const result = await getDB().collection('tasks').insertOne(newTask)
    if (!result.insertedId) throw new Error('Task Create Failed')

    return result.insertedId
  },

  async update(id: string, updateFields: TaskFromClient): Promise<boolean> {

    let updateFieldsWithUpdatedAt: TaskFromClient & {
      updatedAt?: Date
      completedAt?: Date
    } = {
      ...updateFields,
      updatedAt: new Date()
    }

    const task = await getDB().collection('tasks').findOne({ _id: new ObjectId(id) })

    if (!task) return false

    if (updateFieldsWithUpdatedAt.status !== 'completed') {
      updateFieldsWithUpdatedAt.completedAt = undefined
    } else if (task.status !== 'completed') {
      updateFieldsWithUpdatedAt.completedAt = new Date()
    }

    const result = await getDB().collection('tasks').updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...updateFieldsWithUpdatedAt } }
    )
    if (result.matchedCount === 0) throw new Error('Task Update Failed')
    return true
  },

  async delete(id: string): Promise<boolean> {

    const task = await getDB().collection('tasks').findOne({ _id: new ObjectId(id) })
    if (!task) return false

    const result = await getDB().collection('tasks').deleteOne({ _id: new ObjectId(id) })
    if (result.deletedCount === 0) throw new Error('Task Delete Failed')
    return true

  }

}