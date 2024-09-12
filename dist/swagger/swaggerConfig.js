"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Task Management API',
            version: '1.0.0',
            description: 'API documentation for the Task Management system'
        },
        servers: [
            {
                url: 'http://localhost:4000/api',
                description: 'Development server'
            }
        ]
    },
    apis: ['./src/routes/*.ts', './src/controllers/*.ts', './src/schemas/*.ts'] // Point to the files where API annotations are located
};
exports.default = swaggerOptions;
