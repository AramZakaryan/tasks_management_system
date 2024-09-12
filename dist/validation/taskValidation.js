"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDeleteTaskMiddleware = exports.validateDeleteTask = exports.validateGetTaskByIdMiddleware = exports.validateGetTaskById = exports.validateUpdateTaskMiddleware = exports.validateUpdateTask = exports.validateCreateTaskMiddleware = exports.validateCreateTask = void 0;
const express_validator_1 = require("express-validator");
exports.validateCreateTask = [
    (0, express_validator_1.body)('title').isString().withMessage('Title must be a string').notEmpty().withMessage('Title is required'),
    (0, express_validator_1.body)('description').isString().withMessage('Description must be a string').optional(),
    (0, express_validator_1.body)('assignedMember').isString().withMessage('Assigned member must be a string').notEmpty().withMessage('Assigned member is required'),
    (0, express_validator_1.body)('status').isIn(['pending', 'in-progress', 'completed']).withMessage('Invalid status').optional(),
    (0, express_validator_1.body)('priority').isIn(['low', 'medium', 'high']).withMessage('Invalid priority').optional(),
    (0, express_validator_1.body)('dueDate').isISO8601().toDate().withMessage('Due date must be a valid date').optional()
];
const validateCreateTaskMiddleware = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    else {
        next();
    }
};
exports.validateCreateTaskMiddleware = validateCreateTaskMiddleware;
exports.validateUpdateTask = [
    (0, express_validator_1.param)('id').isMongoId().withMessage('Invalid task ID'),
    (0, express_validator_1.body)('title').isString().optional(),
    (0, express_validator_1.body)('description').isString().optional(),
    (0, express_validator_1.body)('assignedMember').isString().optional(),
    (0, express_validator_1.body)('status').isIn(['pending', 'in-progress', 'completed']).optional(),
    (0, express_validator_1.body)('priority').isIn(['low', 'medium', 'high']).optional(),
    (0, express_validator_1.body)('dueDate').isISO8601().toDate().optional()
];
const validateUpdateTaskMiddleware = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    else {
        next();
    }
};
exports.validateUpdateTaskMiddleware = validateUpdateTaskMiddleware;
exports.validateGetTaskById = [
    (0, express_validator_1.param)('id').isMongoId().withMessage('Invalid task ID')
];
const validateGetTaskByIdMiddleware = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    else {
        next();
    }
};
exports.validateGetTaskByIdMiddleware = validateGetTaskByIdMiddleware;
exports.validateDeleteTask = [
    (0, express_validator_1.param)('id').isMongoId().withMessage('Invalid task ID')
];
const validateDeleteTaskMiddleware = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    else {
        next();
    }
};
exports.validateDeleteTaskMiddleware = validateDeleteTaskMiddleware;
