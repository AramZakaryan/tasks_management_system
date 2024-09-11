import { MongoClient, Db } from 'mongodb'
import dotenv from 'dotenv'
import { MongoMemoryServer } from 'mongodb-memory-server'

dotenv.config()

let mongoServer: MongoMemoryServer
let client: MongoClient
let db: Db

const dbName = process.env.NODE_ENV === 'test' ? 'tasks_db_test' : 'tasks_db'

const createClient = async () => {
  if (process.env.NODE_ENV === 'test') {
    mongoServer = await MongoMemoryServer.create()
    const uri = mongoServer.getUri()
    return new MongoClient(uri)
  } else {
    return new MongoClient(process.env.MONGO_URI || 'mongodb://0.0.0.0:27017')
  }
}

export async function runDb() {
  try {
    client = await createClient()
    await client.connect()
    await client.db(dbName).command({ ping: 1 })
    console.log(`Connected to MongoDB: ${dbName}`)
  } catch (error) {
    console.log('Database connection error:', error)
    if (client) {
      await client.close()
    }
  }
}

export const getDB = () => client.db(dbName)

export const stopDb = async () => {
  if (mongoServer) {
    await mongoServer.stop()
  }
  if (client) {
    await client.close()
  }
}
