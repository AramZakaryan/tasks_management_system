"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTaskById = exports.getAllTasks = void 0;
const taskRepository_1 = require("../repositories/taskRepository");
const getAllTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield taskRepository_1.taskRepository.findAll();
        res.status(200).json(tasks);
    }
    catch (error) {
        res.status(500).json({ error: 'Error retrieving tasks' });
    }
});
exports.getAllTasks = getAllTasks;
const getTaskById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield taskRepository_1.taskRepository.findById(req.params.id);
        if (!task) {
            res.status(404).json({ error: 'Task not found' });
        }
        else {
            res.status(200).json(task);
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error retrieving task' });
    }
});
exports.getTaskById = getTaskById;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = yield taskRepository_1.taskRepository.create(req.body);
        if (_id) {
            res.status(201).json({ result: 'created', _id });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error creating task' });
    }
});
exports.createTask = createTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const body = req.body;
        const updateFields = {};
        Object.keys(body).forEach((key) => {
            if (body[key] !== undefined) {
                updateFields[key] = body[key];
            }
        });
        const result = yield taskRepository_1.taskRepository.update(id, updateFields);
        if (result) {
            res.status(200).json({ result: 'updated' });
        }
        else {
            res.status(404).json({ error: 'Task not found' });
        }
    }
    catch (error) {
        res.status(404).json({ error: 'Error updating task status' });
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield taskRepository_1.taskRepository.delete(req.params.id);
        if (result) {
            res.status(200).json({ result: 'deleted' });
        }
        else {
            res.status(404).json({ error: 'Task not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error unable to delete task' });
    }
});
exports.deleteTask = deleteTask;
