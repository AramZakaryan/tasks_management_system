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
exports.genReportByMember = exports.genReportByPeriod = void 0;
const reportService_1 = require("../serivices/reportService");
const genReportByPeriod = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { startDate, endDate } = req.query;
    try {
        const report = yield (0, reportService_1.reportByPeriod)(new Date(startDate), new Date(endDate));
        res.status(200).json(report);
    }
    catch (error) {
        res.status(500).json({ error: 'Unable to generate report' });
    }
});
exports.genReportByPeriod = genReportByPeriod;
const genReportByMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { member } = req.params;
    console.log(req.params);
    try {
        const report = yield (0, reportService_1.reportByMember)(member);
        res.status(200).json(report);
    }
    catch (error) {
        res.status(500).json({ error: 'Unable to generate report' });
    }
});
exports.genReportByMember = genReportByMember;
