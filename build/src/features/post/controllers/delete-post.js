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
exports.DeletePost = void 0;
class DeletePost {
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const { postId } = req.params;
            // socketIOPostObject.emit('delete post', postId);
            // await postCache.deletePostFromCache(postId, req.currentUser!.userId);
            // postQueue.addPostJob('deletePostFromDB', { keyTwo: req.currentUser!.userId, keyOne: postId });
            // res.status(HTTP_STATUS.OK).json({ message: 'Delete post successfully' });
        });
    }
}
exports.DeletePost = DeletePost;
//# sourceMappingURL=delete-post.js.map