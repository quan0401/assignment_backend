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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePost = void 0;
const joi_validation_decorators_1 = require("../../../shared/globals/decorators/joi-validation.decorators");
const post_schemes_1 = require("../schemes/post.schemes");
class UpdatePost {
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const { profilePicture, post, bgColor, imgVersion, imgId, feelings, gifUrl, privacy } = req.body;
            // const { postId } = req.params;
            // const data: IPostDocument = {
            //   profilePicture,
            //   post,
            //   bgColor,
            //   imgVersion,
            //   imgId,
            //   videoVersion: '',
            //   videoId: '',
            //   feelings,
            //   gifUrl,
            //   privacy
            // } as IPostDocument;
            // const updatedPost = await postCache.updatePostInCache(postId, data);
            // socketIOPostObject.emit('update post', updatedPost, 'posts');
            // postQueue.addPostJob('updatePostInDB', { key: postId, value: updatedPost });
            // res.status(HTTP_STATUS.OK).json({ message: 'Update post successfully' });
        });
    }
    postWithContent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const { imgId, imgVersion, videoId, videoVersion } = req.body;
            // if ((imgId && imgVersion) || (videoId && videoVersion)) {
            //   imgId ? await UpdatePost.prototype.addImageToExistingPost(req) : await UpdatePost.prototype.addVideoToExistingPost(req);
            // } else {
            //   const result: UploadApiResponse = req.body?.image
            //     ? await UpdatePost.prototype.addImageToExistingPost(req)
            //     : await UpdatePost.prototype.addVideoToExistingPost(req);
            //   if (!result?.public_id) throw new BadRequesetError(result.message);
            // }
            // res.status(HTTP_STATUS.OK).json({ message: 'Post with content updated successfully' });
        });
    }
}
__decorate([
    (0, joi_validation_decorators_1.joiValidation)(post_schemes_1.postScheme),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UpdatePost.prototype, "update", null);
__decorate([
    (0, joi_validation_decorators_1.joiValidation)(post_schemes_1.postWithContentScheme),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UpdatePost.prototype, "postWithContent", null);
exports.UpdatePost = UpdatePost;
//# sourceMappingURL=update-post.js.map