import { MongoClient, Db } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

export const client = new MongoClient(process.env.MONGODB_URI || 'mongodb://0.0.0.0:27017')

export async function runDb() {
  try {
    await client.connect()
    await client.db('tasks_db').command({ ping: 1 })
    console.log('Connected to MongoDB')
  } catch (error) {
    console.log('Database connection error:', error)
    await client.close()
  }
}