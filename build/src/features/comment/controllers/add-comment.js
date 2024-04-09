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
exports.AddComment = void 0;
const mongodb_1 = require("mongodb");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const comment_service_1 = require("../../../shared/services/db/comment.service");
class AddComment {
    addComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { postId, comment } = req.body;
            const commetObjectId = new mongodb_1.ObjectId();
            const commentData = {
                _id: commetObjectId,
                userId: req.currentUser.userId,
                postId,
                comment,
                createdAt: new Date()
            };
            const response = yield comment_service_1.commentService.addCommentToDB(commentData);
            res.status(http_status_codes_1.default.CREATED).json({ message: 'Comment created successfully', comment: response });
        });
    }
}
exports.AddComment = AddComment;
//# sourceMappingURL=add-comment.js.map