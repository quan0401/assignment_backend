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
exports.postService = void 0;
const post_schema_1 = require("../../../features/post/models/post.schema");
const user_schema_1 = require("../../../features/user/models/user.schema");
class PostService {
    createPost(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield user_schema_1.UserModel.findOneAndUpdate({ _id: data.userId }, { $inc: { postsCount: 1 } });
            const createdPost = yield post_schema_1.PostModel.create(data);
            return createdPost;
        });
    }
    getAllPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield post_schema_1.PostModel.find();
            return posts;
        });
    }
    getAllPostsWithComments() {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield post_schema_1.PostModel.aggregate([
                { $match: { _id: { $ne: '' } } },
                {
                    $lookup: {
                        from: 'Comment',
                        localField: '_id',
                        foreignField: 'postId',
                        as: 'comments'
                    }
                }
            ]);
            return posts;
        });
    }
}
exports.postService = new PostService();
//# sourceMappingURL=post.service.js.map