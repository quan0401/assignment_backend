"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
exports.GetComment = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const comment_service_1 = require("../../../shared/services/db/comment.service");
const mongoose_1 = __importDefault(require("mongoose"));
const joi_validation_decorators_1 = require("../../../shared/globals/decorators/joi-validation.decorators");
const comment_scheme_1 = require("../schemes/comment.scheme");
class GetComment {
    getCommentsOfPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { postId } = req.params;
            const comments = yield comment_service_1.commentService.getCommentsFromPost({ postId: new mongoose_1.default.Types.ObjectId(postId) }, { createdAt: -1 });
            res.status(http_status_codes_1.default.OK).json({ message: 'Get comments from post', comments, count: comments.length });
        });
    }
}
__decorate([
    (0, joi_validation_decorators_1.joiValidation)(comment_scheme_1.getCommentSchema, true),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GetComment.prototype, "getCommentsOfPost", null);
exports.GetComment = GetComment;
//# sourceMappingURL=get-comment.js.map