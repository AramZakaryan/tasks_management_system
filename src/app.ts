import express from 'express'
import { taskRouter } from './routes/taskRouter'
import { reportRouter } from './routes/reportRouter'

export const app = express()
app.use(express.json())

app.use('/api/task', taskRouter)
app.use('/api/report', reportRouter)

app.get('/api', (req, res) => {
  res.status(200).json({ message: 'welcome to api' })
})
