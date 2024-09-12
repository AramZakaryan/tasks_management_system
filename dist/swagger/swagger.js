"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const TaskRequest = {
    type: 'object',
    properties: {
        // _id: {
        //   type: 'string',
        //   description: 'The auto-generated id of the task'
        // },
        title: {
            type: 'string',
            description: 'The title of the task'
        },
        description: {
            type: 'string',
            description: 'The description of the task'
        },
        assignedMember: {
            type: 'string',
            description: 'Member assigned to the task'
        },
        status: {
            type: 'string',
            enum: ['pending', 'in-progress', 'completed'],
            description: 'The current status of the task'
        },
        priority: {
            type: 'string',
            enum: ['low', 'medium', 'high'],
            description: 'The priority of the task'
        },
        // createdAt: {
        //   type: 'string',
        //   format: 'date',
        //   description: 'The created date of the task'
        // },
        // updatedAt: {
        //   type: 'string',
        //   format: 'date',
        //   description: 'The update date of the task'
        // },
        // completedAt: {
        //   type: 'string',
        //   format: 'date',
        //   description: 'The completed date of the task'
        // },
        dueDate: {
            type: 'string',
            format: 'date',
            description: 'The due date of the task'
        }
    },
    required: ['_id', 'title', 'assignedMember', 'createdAt']
    // required: ['_id', 'title', 'assignedMember', 'createdAt']
};
const TaskResponse = {
    type: 'object',
    properties: Object.assign(Object.assign({}, TaskRequest.properties), { _id: {
            type: 'string',
            description: 'The auto-generated id of the task'
        }, createdAt: {
            type: 'string',
            format: 'date',
            description: 'The created date of the task'
        }, updatedAt: {
            type: 'string',
            format: 'date',
            description: 'The update date of the task'
        }, completedAt: {
            type: 'string',
            format: 'date',
            description: 'The completed date of the task'
        } }),
    required: [...TaskRequest.required, '_id', 'createdAt']
};
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Task Management API',
        version: '1.0.0',
        description: 'API documentation for Task Management System'
    },
    servers: [
        {
            url: 'http://localhost:4000/api',
            description: 'Development server'
        }
    ],
    components: {
        schemas: {
            TaskRequest,
            TaskResponse,
            TaskPost: {
                type: 'object',
                properties: {
                    result: {
                        type: 'string',
                        description: 'Successful creation of the task',
                        enum: ['created']
                    },
                    _id: {
                        type: 'string',
                        description: 'The auto-generated id of the task'
                    }
                },
                required: ['result', '_id']
            },
            TaskPut: {
                type: 'object',
                properties: {
                    result: {
                        type: 'string',
                        description: 'Successful update of the task',
                        enum: ['updated']
                    }
                },
                required: ['result']
            },
            TaskDelete: {
                type: 'object',
                properties: {
                    result: {
                        type: 'string',
                        description: 'Successful delete of the task',
                        enum: ['deleted']
                    }
                },
                required: ['result']
            },
            ReportByPeriod: {
                type: 'object',
                properties: {
                    totalTasksCompleted: {
                        type: 'integer',
                        description: 'Total number of tasks completed in the period'
                    },
                    averageCompletionDays: {
                        type: 'number',
                        format: 'float',
                        description: 'Average number of days to complete tasks in the period'
                    },
                    period: {
                        type: 'object',
                        properties: {
                            startDate: {
                                type: 'string',
                                format: 'date',
                                description: 'Start date of the report period'
                            },
                            endDate: {
                                type: 'string',
                                format: 'date',
                                description: 'End date of the report period'
                            }
                        },
                        required: ['startDate', 'endDate']
                    }
                },
                required: ['totalTasksCompleted', 'averageCompletionDays', 'period']
            },
            ReportByMember: {
                type: 'object',
                properties: {
                    totalTasksCompleted: {
                        type: 'integer',
                        description: 'Total number of tasks completed by the member'
                    },
                    averageCompletionDays: {
                        type: 'number',
                        format: 'float',
                        description: 'Average number of days for the member to complete tasks'
                    },
                    assignedMember: {
                        type: 'string',
                        description: 'The member for whom the report was generated'
                    }
                },
                required: ['totalTasksCompleted', 'averageCompletionDays', 'assignedMember']
            }
        }
    }
};
const options = {
    definition: swaggerDefinition,
    apis: ['./src/routes/*.ts'] // Path to your route files
};
exports.swaggerSpec = (0, swagger_jsdoc_1.default)(options);
