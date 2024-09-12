"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRouter = void 0;
const express_1 = require("express");
const taskController_1 = require("../controllers/taskController");
const taskValidation_1 = require("../validation/taskValidation");
exports.taskRouter = (0, express_1.Router)({});
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
exports.taskRouter.get('/', taskController_1.getAllTasks);
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
exports.taskRouter.get('/:id', taskValidation_1.validateGetTaskById, taskValidation_1.validateGetTaskByIdMiddleware, taskController_1.getTaskById);
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
exports.taskRouter.post('/', taskValidation_1.validateCreateTask, taskValidation_1.validateCreateTaskMiddleware, taskController_1.createTask);
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
exports.taskRouter.put('/:id', taskValidation_1.validateUpdateTask, taskValidation_1.validateUpdateTaskMiddleware, taskController_1.updateTask);
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
exports.taskRouter.delete('/:id', taskValidation_1.validateDeleteTask, taskValidation_1.validateDeleteTaskMiddleware, taskController_1.deleteTask);
