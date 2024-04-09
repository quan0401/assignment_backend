"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postWithContentScheme = exports.postScheme = void 0;
const joi_1 = __importDefault(require("joi"));
const postScheme = joi_1.default.object().keys({
    post: joi_1.default.string().optional().allow(null, ''),
    bgColor: joi_1.default.string().optional().allow(null, ''),
    privacy: joi_1.default.string().optional().allow(null, ''),
    feelings: joi_1.default.string().optional().allow(null, ''),
    gifUrl: joi_1.default.string().optional().allow(null, ''),
    profilePicture: joi_1.default.string().optional().allow(null, ''),
    imgVersion: joi_1.default.string().optional().allow(null, ''),
    imgId: joi_1.default.string().optional().allow(null, ''),
    image: joi_1.default.string().optional().allow(null, ''),
    vidoVersion: joi_1.default.string().optional().allow(null, ''),
    vidoId: joi_1.default.string().optional().allow(null, ''),
    vidoge: joi_1.default.string().optional().allow(null, '')
});
exports.postScheme = postScheme;
const postWithContentScheme = joi_1.default.object()
    .keys({
    image: joi_1.default.string().messages({
        'string.empty': 'Image property is not allowed to be empty'
    }),
    video: joi_1.default.string().messages({
        'string.empty': 'Image property is not allowed to be empty'
    }),
    post: joi_1.default.string().optional().allow(null, ''),
    bgColor: joi_1.default.string().optional().allow(null, ''),
    privacy: joi_1.default.string().optional().allow(null, ''),
    feelings: joi_1.default.string().optional().allow(null, ''),
    gifUrl: joi_1.default.string().optional().allow(null, ''),
    profilePicture: joi_1.default.string().optional().allow(null, ''),
    imgVersion: joi_1.default.string().optional().allow(null, ''),
    imgId: joi_1.default.string().optional().allow(null, ''),
    videoVersion: joi_1.default.string().optional().allow(null, ''),
    videoId: joi_1.default.string().optional().allow(null, '')
})
    .xor('image', 'video')
    .messages({
    'object.xor': 'Either image or video property must be provided, but not both'
});
exports.postWithContentScheme = postWithContentScheme;
//# sourceMappingURL=post.schemes.js.map