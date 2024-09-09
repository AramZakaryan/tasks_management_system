"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRouter = void 0;
const express_1 = require("express");
const taskController_1 = require("../controllers/taskController");
exports.taskRouter = (0, express_1.Router)({});
exports.taskRouter.get('/', taskController_1.getAllTasks);
exports.taskRouter.post('/'); /////////// createTask
exports.taskRouter.get('/:id'); ////////////  getTaskById
exports.taskRouter.put('/:id/status'); //////////// updateTaskStatus
