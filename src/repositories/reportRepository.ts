import { getDB } from '../db/db'

export const reportRepository = {

  async completedTasks(filter: any): Promise<any> {
    return await getDB().collection('tasks').find({ status: 'completed', ...filter }).toArray()
  }

}