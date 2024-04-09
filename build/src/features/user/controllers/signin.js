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
exports.Signin = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const user_service_1 = require("../../../shared/services/db/user.service");
const error_handler_1 = require("../../../shared/globals/helpers/error-handler");
class Signin {
    user(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username } = req.body;
            const user = yield user_service_1.userService.findUserByUsernameIfNotCreate(username);
            if (!user)
                throw new error_handler_1.BadRequesetError('User not found');
            req.session = { jwt: { userId: user._id, username: user.username } };
            res.status(http_status_codes_1.default.OK).json({ message: `Welcome back ${user.username}`, user });
        });
    }
}
exports.Signin = Signin;
//# sourceMappingURL=signin.js.map