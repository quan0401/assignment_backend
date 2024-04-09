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
exports.CreatePost = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const cloudinary_upload_1 = require("../../../shared/globals/helpers/cloudinary-upload");
const error_handler_1 = require("../../../shared/globals/helpers/error-handler");
const post_service_1 = require("../../../shared/services/db/post.service");
class CreatePost {
    post(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { image } = req.body;
            const result = (yield (0, cloudinary_upload_1.uploads)(image));
            if (!(result === null || result === void 0 ? void 0 : result.public_id)) {
                throw new error_handler_1.BadRequesetError('File upload: Error occured. Try again!');
            }
            const postData = {
                userId: (_a = req.currentUser) === null || _a === void 0 ? void 0 : _a.userId,
                imageUrl: result.url,
                commentsCount: 0
            };
            const post = yield post_service_1.postService.createPost(postData);
            res.status(http_status_codes_1.default.CREATED).json({ message: 'Create post successfully', post });
        });
    }
}
exports.CreatePost = CreatePost;
//# sourceMappingURL=create-post.js.map