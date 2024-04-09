"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRoute = void 0;
const express_1 = require("express");
const add_comment_1 = require("../controllers/add-comment");
const get_comment_1 = require("../controllers/get-comment");
class CommentRoute {
    constructor() {
        this.router = (0, express_1.Router)();
    }
    routes() {
        this.router.get('/:postId', get_comment_1.GetComment.prototype.getCommentsOfPost);
        this.router.post('/', add_comment_1.AddComment.prototype.addComment);
        return this.router;
    }
}
exports.commentRoute = new CommentRoute();
//# sourceMappingURL=comment.routes.js.map