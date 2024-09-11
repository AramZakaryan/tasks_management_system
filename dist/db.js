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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stopDb = exports.getDB = void 0;
exports.runDb = runDb;
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
const mongodb_memory_server_1 = require("mongodb-memory-server");
dotenv_1.default.config();
let mongoServer;
let client;
let db;
const dbName = process.env.NODE_ENV === 'test' ? 'tasks_db_test' : 'tasks_db';
const createClient = () => __awaiter(void 0, void 0, void 0, function* () {
    if (process.env.NODE_ENV === 'test') {
        mongoServer = yield mongodb_memory_server_1.MongoMemoryServer.create();
        const uri = mongoServer.getUri();
        return new mongodb_1.MongoClient(uri);
    }
    else {
        return new mongodb_1.MongoClient(process.env.MONGO_URI || 'mongodb://0.0.0.0:27017');
    }
});
function runDb() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            client = yield createClient();
            yield client.connect();
            yield client.db(dbName).command({ ping: 1 });
            console.log(`Connected to MongoDB: ${dbName}`);
        }
        catch (error) {
            console.log('Database connection error:', error);
            if (client) {
                yield client.close();
            }
        }
    });
}
const getDB = () => client.db(dbName);
exports.getDB = getDB;
const stopDb = () => __awaiter(void 0, void 0, void 0, function* () {
    if (mongoServer) {
        yield mongoServer.stop();
    }
    if (client) {
        yield client.close();
    }
});
exports.stopDb = stopDb;
