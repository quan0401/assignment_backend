"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: { type: String },
    postsCount: { type: Number, default: 0 },
    profilePicture: { type: String, default: 'https://res.cloudinary.com/dg3fsapzu/image/upload/v1712593534/gzmjjep3zxd6cpu801li.jpg' }
});
const UserModel = (0, mongoose_1.model)('User', userSchema, 'User');
exports.UserModel = UserModel;
//# sourceMappingURL=user.schema.js.map