import { Router } from 'express'
import { createTask, deleteTask, getAllTasks, getTaskById, updateTask } from '../controllers/taskController'


import {
  validateCreateTask,
  validateCreateTaskMiddleware,
  validateUpdateTask,
  validateUpdateTaskMiddleware,
  validateGetTaskById,
  validateGetTaskByIdMiddleware,
  validateDeleteTask,
  validateDeleteTaskMiddleware
} from '../validation/taskValidation'

export const taskRouter = Router({})

/**
 * @swagger
 * /task:
 *   get:
 *     summary: Retrieve all tasks
 *     responses:
 *       200:
 *         description: A list of tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TaskResponse'
 */
taskRouter.get('/', getAllTasks)

/**
 * @swagger
 * /task/{id}:
 *   get:
 *     summary: Retrieve a task by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The task ID
 *     responses:
 *       200:
 *         description: Task details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TaskResponse'
 *       404:
 *         description: Task not found
 */
taskRouter.get('/:id', validateGetTaskById, validateGetTaskByIdMiddleware, getTaskById)

/**
 * @swagger
 * /task:
 *   post:
 *     summary: Create a new task
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TaskRequest'
 *     responses:
 *       201:
 *         description: Task created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TaskPost'
 *       400:
 *         description: Invalid input
 */
taskRouter.post('/', validateCreateTask, validateCreateTaskMiddleware, createTask)

/**
 * @swagger
 * /task/{id}:
 *   put:
 *     summary: Update an existing task
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TaskRequest'
 *     responses:
 *       200:
 *         description: Task updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TaskPut'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Task not found
 */
taskRouter.put('/:id', validateUpdateTask, validateUpdateTaskMiddleware, updateTask)

/**
 * @swagger
 * /task/{id}:
 *   delete:
 *     summary: Delete a task
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Task deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TaskDelete'
 *       404:
 *         description: Task not found
 */
taskRouter.delete('/:id', validateDeleteTask, validateDeleteTaskMiddleware, deleteTask)

