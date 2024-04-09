"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const error_handler_1 = require("./error-handler");
class AuthMiddleware {
    verifyUser(req, res, next) {
        var _a;
        if (!((_a = req.session) === null || _a === void 0 ? void 0 : _a.jwt))
            throw new error_handler_1.NotAuthorizedError('Token is not available, please try again');
        try {
            // const payload: AuthPayload = JWT.verify(req.session!.jwt, config.JWT_TOKEN) as AuthPayload;
            req.currentUser = req.session.jwt;
            next();
        }
        catch (error) {
            throw new error_handler_1.NotAuthorizedError('Token is invalid, please login again');
        }
    }
    checkAuthentication(req, res, next) {
        if (!(req === null || req === void 0 ? void 0 : req.currentUser)) {
            throw new error_handler_1.NotAuthorizedError('Authentication is required to access this route');
        }
        next();
    }
}
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=auth-middleware.js.map