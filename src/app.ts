import express from 'express'
import { taskRouter } from './routes/taskRouter'
import { reportRouter } from './routes/reportRouter'
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger/swagger';

export const app = express()
app.use(express.json())

app.use('/api/task', taskRouter)
app.use('/api/report', reportRouter)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/api', (req, res) => {
  res.status(200).json({ message: 'welcome to api' })
})
