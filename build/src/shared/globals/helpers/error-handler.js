"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = exports.FileTooLarge = exports.NotAuthorizedError = exports.BadRequesetError = exports.JoiRequestValidationError = exports.CustomError = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
class CustomError extends Error {
    constructor(message) {
        super(message);
    }
    serializeErrors() {
        return {
            message: this.message,
            statusCode: this.statusCode,
            status: this.status
        };
    }
}
exports.CustomError = CustomError;
class JoiRequestValidationError extends CustomError {
    constructor(message) {
        super(message);
        this.statusCode = http_status_codes_1.default.BAD_REQUEST;
        this.status = 'error';
    }
}
exports.JoiRequestValidationError = JoiRequestValidationError;
class BadRequesetError extends CustomError {
    constructor(message) {
        super(message);
        this.statusCode = http_status_codes_1.default.BAD_REQUEST;
        this.status = 'error';
    }
}
exports.BadRequesetError = BadRequesetError;
class NotAuthorizedError extends CustomError {
    constructor(message) {
        super(message);
        this.statusCode = http_status_codes_1.default.UNAUTHORIZED;
        this.status = 'error';
    }
}
exports.NotAuthorizedError = NotAuthorizedError;
class FileTooLarge extends CustomError {
    constructor(message) {
        super(message);
        this.statusCode = http_status_codes_1.default.REQUEST_TOO_LONG;
        this.status = 'error';
    }
}
exports.FileTooLarge = FileTooLarge;
class ServerError extends CustomError {
    constructor(message) {
        super(message);
        this.statusCode = http_status_codes_1.default.SERVICE_UNAVAILABLE;
        this.status = 'error';
    }
}
exports.ServerError = ServerError;
// throw new BadRequesetError("You have an error");
//# sourceMappingURL=error-handler.js.map