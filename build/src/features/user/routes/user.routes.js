"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const signin_1 = require("../controllers/signin");
const signup_1 = require("../controllers/signup");
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
    }
    routes() {
        this.router.post('/signup', signup_1.Signup.prototype.user);
        this.router.post('/signin', signin_1.Signin.prototype.user);
        return this.router;
    }
}
exports.userRoutes = new UserRoutes();
//# sourceMappingURL=user.routes.js.map