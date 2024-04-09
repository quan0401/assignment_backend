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
require('dotenv').config();
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
// import { redisConnection } from '~services/redis/redis.connection';
const log = config_1.config.createLogger('setupDatabase');
exports.default = () => __awaiter(void 0, void 0, void 0, function* () {
    const connect = () => __awaiter(void 0, void 0, void 0, function* () {
        mongoose_1.default
            // .connect(config.NODE_ENV !== 'development' ? 'mongodb://localhost:27017/social' : (config.MONGO_URI as string), {})
            .connect(config_1.config.MONGO_URI)
            .then(() => {
            log.info('Successfully connected to database');
            // redisConnection.connect();
        })
            .catch((error) => {
            log.error('Error connecting to database', error);
            return process.exit(1);
        });
    });
    yield connect();
    mongoose_1.default.connection.on('disconnected', connect);
});
//# sourceMappingURL=setupDatabase.js.map