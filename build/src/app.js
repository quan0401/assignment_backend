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
const express_1 = __importDefault(require("express"));
const setupServer_1 = require("./setupServer");
const setupDatabase_1 = __importDefault(require("./setupDatabase"));
const config_1 = require("./config");
const log = config_1.config.createLogger('app');
class Application {
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            this.loadConfig();
            yield (0, setupDatabase_1.default)();
            const app = (0, express_1.default)();
            const server = new setupServer_1.ChattyServer(app);
            server.start();
            Application.handleExit();
        });
    }
    static handleExit() {
        process.on('uncaughtException', (err, origin) => {
            log.error(`There was an uncaught error: ${err}`);
            Application.shutDownProperly(1);
        });
        process.on('unhandledRejection', (reason) => {
            log.error(`Unhandled rejection at promise: ${reason}`);
            Application.shutDownProperly(2);
        });
        process.on('SIGTERM', () => {
            log.error('Caught SIGTERM');
            Application.shutDownProperly(2);
        });
        process.on('SIGINT', () => {
            log.error('Caught SIGINT');
            Application.shutDownProperly(2);
        });
        process.on('exit', () => {
            log.error('Exiting');
        });
    }
    static shutDownProperly(exitCode) {
        Promise.resolve()
            .then(() => {
            log.info('Shutdown complete.');
            process.exit(exitCode);
        })
            .catch((error) => {
            log.error(`Error during shutdown: ${error}`);
            process.exit(1);
        });
    }
    loadConfig() {
        config_1.config.validateConfig();
        config_1.config.cloudinaryConfig();
    }
}
const application = new Application();
application.initialize();
//# sourceMappingURL=app.js.map