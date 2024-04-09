"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRoutes = void 0;
const express_1 = require("express");
const create_post_1 = require("../controllers/create-post");
const get_post_1 = require("../controllers/get-post");
class PostRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
    }
    routes() {
        this.router.get('/', get_post_1.GetPost.prototype.getPosts);
        this.router.post('/', create_post_1.CreatePost.prototype.post);
        return this.router;
    }
}
exports.postRoutes = new PostRoutes();
//# sourceMappingURL=post.routes.js.map