"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommentSchema = exports.addCommentSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const addCommentSchema = joi_1.default.object().keys({
    userTo: joi_1.default.string().required().messages({
        'any.required': 'userTo is a required property'
    }),
    postId: joi_1.default.string().required().messages({
        'any.required': 'postId is a required property'
    }),
    comment: joi_1.default.string().required().messages({
        'any.required': 'comment is a required property'
    }),
    profilePicture: joi_1.default.string().optional().allow(null, ''),
    avatarColor: joi_1.default.string().optional().allow(null, ''),
    commentsCount: joi_1.default.number().optional().allow(null, '')
});
exports.addCommentSchema = addCommentSchema;
const getCommentSchema = joi_1.default.object({
    postId: joi_1.default.string().required().messages({
        'string.base': 'postId must be a string',
        'any.required': 'postId is a required property',
        'string.empty': 'postId cannot be an empty string'
    }),
    commentId: joi_1.default.string().optional().allow(null).messages({
        'string.base': 'commentId must be a string',
        'string.empty': 'commentId cannot be an empty string'
    })
}).unknown(false);
exports.getCommentSchema = getCommentSchema;
//# sourceMappingURL=comment.scheme.js.map