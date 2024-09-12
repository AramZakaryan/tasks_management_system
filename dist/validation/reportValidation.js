"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateGenReportMiddleware = exports.validateGenReportByMember = exports.validateGenReportByPeriod = void 0;
const express_validator_1 = require("express-validator");
exports.validateGenReportByPeriod = [
    (0, express_validator_1.query)('startDate')
        .exists().withMessage('startDate is required')
        .isISO8601().withMessage('startDate must be a valid ISO 8601 date'),
    (0, express_validator_1.query)('endDate')
        .exists().withMessage('endDate is required')
        .isISO8601().withMessage('endDate must be a valid ISO 8601 date')
        .custom((endDate, { req }) => {
        if (req.query && new Date(endDate) < new Date(req.query.startDate)) {
            throw new Error('endDate must be greater than or equal to startDate');
        }
        return true;
    })
];
exports.validateGenReportByMember = [
    (0, express_validator_1.param)('member')
        .exists().withMessage('Member is required')
        .isString().withMessage('Member must be a string')
        .notEmpty().withMessage('Member cannot be empty')
];
const validateGenReportMiddleware = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    else {
        next();
    }
};
exports.validateGenReportMiddleware = validateGenReportMiddleware;
