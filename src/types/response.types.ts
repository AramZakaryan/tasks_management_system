import { Response } from 'express'
import { TaskToClient } from './task.types'
import { ObjectId } from 'mongodb'

export type ResponseGetAllTasks = Response<TaskToClient[] | { error: 'Error retrieving tasks' }>

export type ResponseGetTaskById = Response<TaskToClient | { error: 'Task not found' | 'Error retrieving task' }>

export type ResponseCreateTask = Response<{ result: 'created', _id: ObjectId } | { error: 'Error creating task' }>

export type ResponseUpdateTask = Response<{ result: 'updated' } | { error: 'Task not found' } | {
  error: 'Error updating task status'
}>

export type ResponseDeleteTask = Response<{ result: 'deleted' } | { error: 'Task not found' } | {
  error: 'Error unable to delete task'
}>