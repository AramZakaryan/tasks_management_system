import { app } from '../src/app'
import { agent } from 'supertest'
import { client, getDB } from '../src/utils/db'

beforeAll(async () => {
});

afterAll(async () => {
  await client.close();
});


export const req = agent(app)
describe('tests of taskController', () => {

  it('Should welcome to api', async () => {

    const res = await req
      .get('/api')
      .expect(200)

    expect(res.body).toEqual({ message: 'welcome to api' })
  })

  it('Should welcome to api', async () => {

    const res = await req
      .get('/api/task')
      .expect(200)

    expect(res.body).toEqual([])
  })

})