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
exports.userService = void 0;
const user_schema_1 = require("../../../features/user/models/user.schema");
class UserService {
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield user_schema_1.UserModel.create(data);
            return result;
        });
    }
    findUserByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = (yield user_schema_1.UserModel.findOne({ username }));
            return result;
        });
    }
    findUserByUsernameIfNotCreate(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_schema_1.UserModel.findOneAndUpdate({ username }, {}, { upsert: true, new: true, setDefaultsOnInsert: true });
            return user;
        });
    }
}
exports.userService = new UserService();
//# sourceMappingURL=user.service.js.map