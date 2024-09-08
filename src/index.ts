import { app } from './app'
import dotenv from 'dotenv'
import { runDb } from '../utils/db'

dotenv.config()

const port = process.env.PORT || 4000

const startApp = async () => {
  await runDb()
  app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })
}

void startApp()