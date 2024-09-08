import express from 'express'

export const app = express()
app.use(express.json())

app.get('/api', (req, res) => {
  res.status(200).json({ message: 'welcome to the app!' })
})