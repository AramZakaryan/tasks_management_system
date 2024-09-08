import { app } from '../src/app'
import { agent } from 'supertest'

export const req = agent(app)
describe('test of welcome to the app!', () => {

  it('should get empty array', async () => {

    const res = await req
      .get('/')
      .expect(200)

    expect(res.body).toEqual({ message: 'welcome to the app!' })
  })

})