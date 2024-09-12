type Report<T> = T & {
  totalTasksCompleted: number
  averageCompletionDays: number
}

export type ReportByPeriod = Report<{
  period: {
    startDate: Date
    endDate: Date
  }
}>

export type ReportByMember = Report<{ assignedMember: string }>

export type Filter = { completedAt: { $gte: Date, $lte: Date } } | { assignedMember: string }