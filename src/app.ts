import express from 'express'
import { tasksRouter } from './routes/tasksRouter'

export const app = express()
app.use(express.json())

app.use('/api/tasks', tasksRouter)

app.get('/api', (req, res) => {
  res.status(200).json({ message: 'welcome to api' })
})
