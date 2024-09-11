"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRouter = void 0;
const express_1 = require("express");
const taskController_1 = require("./taskController");
exports.taskRouter = (0, express_1.Router)({});
exports.taskRouter.get('/', taskController_1.getAllTasks);
exports.taskRouter.post('/', taskController_1.createTask);
exports.taskRouter.get('/:id', taskController_1.getTaskById);
exports.taskRouter.put('/:id/status'); //////////// updateTaskStatus
