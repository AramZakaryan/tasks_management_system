import { getDB } from '../db/db'
import { Filter } from '../types/report.types'

export const reportRepository = {

  async completedTasks(filter: Filter): Promise<any> {
    return await getDB().collection('tasks').find({ status: 'completed', ...filter }).toArray()
  }

}