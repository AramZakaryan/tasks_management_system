import { Request } from 'express'
import { TaskFromClient } from './task.types'

export type RequestGetAllTasks =  Request<{},{},{}>

export type RequestGetTaskById = Request<{ id: string }>

export type RequestCreateTask = Request<{}, {}, TaskFromClient>

export type RequestUpdateTask = Request<{ id: string }, {}, TaskFromClient>

export type RequestDeleteTask = Request<{ id: string }>