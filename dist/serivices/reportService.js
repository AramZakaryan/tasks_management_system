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
exports.reportByMember = exports.reportByPeriod = void 0;
const calculateAverageCompletionDays_1 = require("../utils/calculateAverageCompletionDays");
const reportRepository_1 = require("../repositories/reportRepository");
const reportByPeriod = (startDate, endDate) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield reportRepository_1.reportRepository.completedTasks({
        completedAt: { $gte: startDate, $lte: endDate }
    });
    return {
        period: { startDate, endDate },
        totalTasksCompleted: tasks.length,
        averageCompletionDays: (0, calculateAverageCompletionDays_1.calculateAverageCompletionDays)(tasks)
    };
});
exports.reportByPeriod = reportByPeriod;
const reportByMember = (assignedMember) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield reportRepository_1.reportRepository.completedTasks({ assignedMember: assignedMember });
    return {
        assignedMember,
        totalTasksCompleted: tasks.length,
        averageCompletionDays: (0, calculateAverageCompletionDays_1.calculateAverageCompletionDays)(tasks)
    };
});
exports.reportByMember = reportByMember;
