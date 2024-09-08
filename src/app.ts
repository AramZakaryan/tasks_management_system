import express from 'express'
import { taskRouter } from './routes/taskRouter'

export const app = express()
app.use(express.json())

app.use('/api/task', taskRouter)

app.get('/api', (req, res) => {
  res.status(200).json({ message: 'welcome to api' })
})
