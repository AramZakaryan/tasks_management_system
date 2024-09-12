import { Task } from '../types/task.types'

export const calculateAverageCompletionDays = (tasks: Task[]) => {
  if (tasks.length === 0) return 0
  const totalCompletionTime = tasks.reduce((total, task) => {
    const completionTime = task.completedAt.getTime() - task.createdAt.getTime()
    return total + completionTime
  }, 0)

  const averageTime = totalCompletionTime / tasks.length
  return Math.round(averageTime / (1000 * 60 * 60 * 24))
}