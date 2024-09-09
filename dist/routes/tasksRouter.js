"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasksRouter = void 0;
const express_1 = require("express");
exports.tasksRouter = (0, express_1.Router)({});
exports.tasksRouter.get('/', (req, res) => {
    res.status(200).json({ message: 'welcome to api/tasks' });
}); //////////////// forDel
exports.tasksRouter.post('/'); /////////// createTask
exports.tasksRouter.get('/:id'); ////////////  getTaskById
exports.tasksRouter.put('/:id/status'); //////////// updateTaskStatus
