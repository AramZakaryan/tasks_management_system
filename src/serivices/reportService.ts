import { calculateAverageCompletionDays } from '../utils/calculateAverageCompletionDays'
import { reportRepository } from '../repositories/reportRepository'

export const reportByPeriod = async (startDate: Date, endDate: Date) => {
  const tasks = await reportRepository.completedTasks({
    completedAt: { $gte: startDate, $lte: endDate }
  })

  return {
    period: { startDate, endDate },
    totalTasksCompleted: tasks.length,
    averageCompletionDays: calculateAverageCompletionDays(tasks)
  }
}

export const reportByMember = async (assignedMember: string) => {
  const tasks = await reportRepository.completedTasks({ assignedMember: assignedMember })

  return {
    assignedMember,
    totalTasksCompleted: tasks.length,
    averageCompletionDays: calculateAverageCompletionDays(tasks)
  }

}