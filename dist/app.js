"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const taskRouter_1 = require("./routes/taskRouter");
const reportRouter_1 = require("./routes/reportRouter");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = require("./swagger/swagger");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use('/api/task', taskRouter_1.taskRouter);
exports.app.use('/api/report', reportRouter_1.reportRouter);
exports.app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerSpec));
exports.app.get('/api', (req, res) => {
    res.status(200).json({ message: 'welcome to api' });
});
