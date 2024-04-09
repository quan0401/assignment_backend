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
exports.ChattyServer = void 0;
const express_1 = require("express");
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const hpp_1 = __importDefault(require("hpp"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const socket_io_1 = require("socket.io");
const redis_1 = require("redis");
const redis_adapter_1 = require("@socket.io/redis-adapter");
const compression_1 = __importDefault(require("compression"));
require("express-async-errors");
const config_1 = require("./config");
const error_handler_1 = require("./shared/globals/helpers/error-handler");
const routes_1 = __importDefault(require("./routes"));
const swagger_stats_1 = __importDefault(require("swagger-stats"));
const SERVER_PORT = 5001;
const log = config_1.config.createLogger('server');
class ChattyServer {
    constructor(app) {
        this.app = app;
    }
    start() {
        this.securityMiddleware(this.app);
        this.standardMiddleware(this.app);
        this.apiMonitoring(this.app);
        this.routeMiddleware(this.app);
        this.globalErrorHandler(this.app);
        this.startServer(this.app);
    }
    securityMiddleware(app) {
        app.use((0, cookie_session_1.default)({
            name: 'session',
            keys: [config_1.config.SECRET_KEY_ONE, config_1.config.SECRET_KEY_TWO],
            maxAge: 3600 * 1000 * 24,
            secure: false
            // sameSite: 'none'
        }));
        app.use((0, hpp_1.default)());
        app.use((0, helmet_1.default)());
        app.use((0, cors_1.default)({
            origin: config_1.config.CLIENT_URI,
            // credentials: true so that we can attach token to client
            credentials: true,
            optionsSuccessStatus: 200,
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
        }));
    }
    standardMiddleware(app) {
        app.use((0, compression_1.default)());
        app.use((0, express_1.json)({ limit: '50mb' }));
        app.use((0, express_1.urlencoded)({ extended: true, limit: '50mb' }));
    }
    routeMiddleware(app) {
        (0, routes_1.default)(app);
    }
    apiMonitoring(app) {
        app.use(swagger_stats_1.default.getMiddleware({
            uriPath: '/api-monitoring'
        }));
    }
    globalErrorHandler(app) {
        // Handle unknow routes
        app.all('*', (req, res) => {
            res.status(http_status_codes_1.default.NOT_FOUND).json({ message: `${req.originalUrl} not found` });
        });
        app.use((error, req, res, next) => {
            log.error(error);
            if (error instanceof error_handler_1.CustomError) {
                return res.status(error.statusCode).json(error.serializeErrors());
            }
            next();
        });
    }
    // Server
    startServer(app) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!config_1.config.JWT_TOKEN)
                throw new Error('JWT_TOKEN must be provided.');
            try {
                const httpServer = new http_1.default.Server(app);
                // const socketIO: Server = await this.createSocketIO(httpServer);
                this.startHttpServer(httpServer);
                // this.socketIOConnections(socketIO);
            }
            catch (error) {
                log.error(error);
            }
        });
    }
    // Use server from socket.io instead of from http so as to not create conflict
    createSocketIO(httpServer) {
        return __awaiter(this, void 0, void 0, function* () {
            const io = new socket_io_1.Server(httpServer, {
                cors: {
                    origin: config_1.config.CLIENT_URI,
                    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
                }
            });
            const pubClient = (0, redis_1.createClient)({ url: config_1.config.REDIS_HOST });
            const subClient = pubClient.duplicate();
            yield Promise.all([pubClient.connect(), subClient.connect()]);
            io.adapter((0, redis_adapter_1.createAdapter)(pubClient, subClient));
            return io;
        });
    }
    startHttpServer(httpServer) {
        log.info(`Server start on process ${process.pid}`);
        httpServer.listen(SERVER_PORT, () => {
            log.info('Server is running on port ', SERVER_PORT);
        });
    }
    socketIOConnections(io) {
        // const socketIOPostHandler: SocketIOPostHandler = new SocketIOPostHandler(io);
        // const socketIOFollowerHandler: SocketIOFollowerHandler = new SocketIOFollowerHandler(io);
        // const socketIOUser: SocketIOUserHandler = new SocketIOUserHandler(io);
        // const socketIONofitcation: SocketNofitication = new SocketNofitication();
        // const socketIOImage: SocketImage = new SocketImage();
        // const socketIOChat: SocketChat = new SocketChat(io);
        // socketIOPostHandler.listen();
        // socketIOFollowerHandler.listen();
        // socketIOUser.listen();
        // socketIONofitcation.listen(io);
        // socketIOImage.listen(io);
        // socketIOChat.listen();
    }
}
exports.ChattyServer = ChattyServer;
//# sourceMappingURL=setupServer.js.map