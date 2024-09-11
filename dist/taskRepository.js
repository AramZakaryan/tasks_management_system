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
exports.taskRepository = void 0;
const db_1 = require("./db");
const mongodb_1 = require("mongodb");
exports.taskRepository = {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, db_1.getDB)().collection('tasks').find().toArray();
        });
    },
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const task = yield (0, db_1.getDB)().collection('tasks').findOne({ _id: new mongodb_1.ObjectId(id) });
                return task !== null && task !== void 0 ? task : undefined;
            }
            catch (_a) {
                return undefined;
            }
        });
    },
    create(task) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, db_1.getDB)().collection('tasks').insertOne(task);
            return Object.assign(Object.assign({}, task), { _id: result.insertedId });
        });
    }
};
