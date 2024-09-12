"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportRouter = void 0;
const express_1 = require("express");
const reportController_1 = require("../controllers/reportController");
const reportValidation_1 = require("../validation/reportValidation");
exports.reportRouter = (0, express_1.Router)({});
/**
 * @swagger
 * /report/period:
 *   get:
 *     summary: Generate a report for a specific period
 *     parameters:
 *       - in: query
 *         name: startDate
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         description: The start date of the report period in ISO 8601 format
 *       - in: query
 *         name: endDate
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         description: The end date of the report period in ISO 8601 format
 *     responses:
 *       200:
 *         description: Report generated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReportByPeriod'
 *       400:
 *         description: Invalid input or error generating report
 */
exports.reportRouter.get('/period', reportValidation_1.validateGenReportByPeriod, reportValidation_1.validateGenReportMiddleware, reportController_1.genReportByPeriod);
/**
 * @swagger
 * /report/member/{member}:
 *   get:
 *     summary: Generate a report for a specific member
 *     parameters:
 *       - in: path
 *         name: member
 *         required: true
 *         schema:
 *           type: string
 *         description: The member for whom the report is to be generated
 *     responses:
 *       200:
 *         description: Report generated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReportByMember'
 *       400:
 *         description: Invalid input or error generating report
 */
exports.reportRouter.get('/member/:member', reportValidation_1.validateGenReportByMember, reportValidation_1.validateGenReportMiddleware, reportController_1.genReportByMember);
