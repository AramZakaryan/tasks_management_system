"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportRouter = void 0;
const express_1 = require("express");
const reportController_1 = require("../controllers/reportController");
exports.reportRouter = (0, express_1.Router)({});
exports.reportRouter.get('/period', reportController_1.genReportByPeriod);
