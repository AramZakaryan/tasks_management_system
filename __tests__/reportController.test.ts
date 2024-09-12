import request from 'supertest'
import { app } from '../src/app'
import { runDb, stopDb } from '../src/db/db'

beforeAll(async () => {
  await runDb()
})

afterAll(async () => {
  await stopDb()
})

describe('Task API', () => {
  let taskId: string

  it('should generate a report for a time period', async () => {
    await request(app)
      .post('/api/task')
      .send({
        title: 'New Task1',
        assignedMember: 'Member 1',
        status: 'completed'
      })
    await request(app)
      .post('/api/task')
      .send({
        title: 'New Task2',
        assignedMember: 'Member 2',
        status: 'pending'
      })

    const response = await request(app).get('/api/report/period?startDate=2024-01-01&endDate=2024-12-31')

    expect(response.status).toBe(200)
    expect(response.body.period.startDate).toBe('2024-01-01T00:00:00.000Z')
    expect(response.body.period.endDate).toBe('2024-12-31T00:00:00.000Z')
    expect(response.body.totalTasksCompleted).toBe(1)
  })
  it('should generate a report for a team member', async () => {

    const response = await request(app).get('/api/report/member/Member 1')

    expect(response.status).toBe(200)
    expect(response.body.assignedMember).toBe('Member 1')
    expect(response.body.totalTasksCompleted).toBe(1)
  })

})
