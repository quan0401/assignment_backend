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
exports.healthRoutes = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const express_1 = require("express");
const moment_1 = __importDefault(require("moment"));
const config_1 = require("../../../config");
const axios_1 = __importDefault(require("axios"));
const perf_hooks_1 = require("perf_hooks");
class HealthRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
    }
    // TODO: remove at the end later
    health() {
        this.router.get('/health', (req, res) => {
            res
                .status(http_status_codes_1.default.OK)
                .send(`Health: Server instance is healthy with id ${process.pid} on ${(0, moment_1.default)().format('LL')}. test CodeDeploy`);
        });
        return this.router;
    }
    env() {
        this.router.get('/env', (req, res) => {
            res.status(http_status_codes_1.default.OK).send(`This is the ${config_1.config.NODE_ENV} environment.`);
        });
        return this.router;
    }
    instance() {
        this.router.get('/instance', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, axios_1.default)({
                method: 'get',
                url: config_1.config.EC2_URL
            });
            res
                .status(http_status_codes_1.default.OK)
                .send(`Server is running on EC2 instance with id ${response.data} and process id ${process.pid} on ${(0, moment_1.default)().format('LL')}`);
        }));
        return this.router;
    }
    fiboRoute() {
        this.router.get('/fibo/:num', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { num } = req.params;
            const start = perf_hooks_1.performance.now();
            const result = this.fibo(parseInt(num, 10));
            const end = perf_hooks_1.performance.now();
            const response = yield (0, axios_1.default)({
                method: 'get',
                url: config_1.config.EC2_URL
            });
            res.status(http_status_codes_1.default.OK).send(
            // `Fibonacci series of ${num} is ${result} and it took ${end - start}ms with EC2 instance of ${response.data} and process id ${
            //   process.pid
            `Fibonacci series of ${num} is ${result} and it took ${end - start}ms with EC2 instance of ${response.data} an process id ${process.pid} on ${(0, moment_1.default)().format('LL')}`);
        }));
        return this.router;
    }
    fibo(data) {
        if (data < 2)
            return 1;
        else
            return this.fibo(data - 2) + this.fibo(data - 1);
    }
}
exports.healthRoutes = new HealthRoutes();
//# sourceMappingURL=health.routes.js.map