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
exports.createTask = exports.getTaskById = exports.getAllTasks = void 0;
const taskRepository_1 = require("./taskRepository");
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
        const newTask = yield taskRepository_1.taskRepository.create(req.body);
        res.status(201).json(newTask);
    }
    catch (error) {
        res.status(500).json({ error: 'Error creating task' });
    }
});
exports.createTask = createTask;
