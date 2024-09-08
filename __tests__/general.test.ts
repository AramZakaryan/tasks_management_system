import { app } from '../src/app'
import { agent } from 'supertest'

export const req = agent(app)
describe('general tests', () => {

  it('test of welcome to api', async () => {

    const res = await req
      .get('/api')
      .expect(200)

    expect(res.body).toEqual({ message: 'welcome to api' })
  })

  it('test of welcome to api/tests', async () => {

    const res = await req
      .get('/api/tasks')
      .expect(200)

    expect(res.body).toEqual({ message: 'welcome to api/tasks' })
  })

})