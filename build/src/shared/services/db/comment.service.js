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
exports.commentService = void 0;
const comment_schema_1 = require("../../../features/comment/model/comment.schema");
const post_schema_1 = require("../../../features/post/models/post.schema");
class CommentService {
    addCommentToDB(commentData) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield comment_schema_1.CommentsModel.create(commentData);
            yield post_schema_1.PostModel.updateOne({ $inc: { commentsCount: 1 } });
            return result;
        });
    }
    // public async addCommentToDB(commentData: ICommentJob): Promise<void> {
    //   const { postId, userTo, userFrom, username, comment } = commentData;
    //   const createdComment: Promise<ICommentDocument> = CommexntsModel.create(comment);
    //   const post: Query<IPostDocument, IPostDocument> = PostModel.findOneAndUpdate(
    //     { _id: postId },
    //     { $inc: { commentsCount: 1 } },
    //     { new: true }
    //   ) as Query<IPostDocument, IPostDocument>;
    //   const user: Promise<IUserDocument> = userCache.getUserFromCache(userTo) as Promise<IUserDocument>;
    //   const response: [ICommentDocument, IPostDocument, IUserDocument] = await Promise.all([createdComment, post, user]);
    //   // Send nofitication
    //   if (response[2].notifications.comments && userFrom !== userTo) {
    //     const nofiticationModel: INotificationDocument = new NofiticationModel();
    //     const nofitications: INotificationDocument[] = await nofiticationModel.insertNotification({
    //       userFrom,
    //       userTo,
    //       message: `${username} commented on this post.`,
    //       notificationType: 'comment',
    //       entityId: new mongoose.Types.ObjectId(postId),
    //       createdItemId: new mongoose.Types.ObjectId(response[0]._id!),
    //       comment: comment.comment,
    //       post: response[1].post,
    //       imgId: response[1].imgId!,
    //       imgVersion: response[1].imgVersion!,
    //       gifUrl: response[1].gifUrl!,
    //       reaction: '',
    //       createdAt: new Date()
    //     });
    //     // Send to client with socket
    //     socketIONofitcationObject.emit('insert nofitication', nofitications, { userTo });
    //     // Send to email queue
    //     const templateParams: INotificationTemplate = {
    //       username: response[2].username!,
    //       header: 'Comment Nofitication',
    //       message: `${username} commented on your post`
    //     };
    //     const template: string = nofiticationTemplate.nofiticationMessageTemplate(templateParams);
    //     emailQueue.addEmailJob('commentEmail', { template, receiverEmail: response[2].email!, subject: 'Post nofitication' });
    //   }
    // }
    getCommentsFromPost(query, sort) {
        return __awaiter(this, void 0, void 0, function* () {
            const comments = yield comment_schema_1.CommentsModel.aggregate([{ $match: query }, { $sort: sort }]);
            return comments;
        });
    }
    // public async getCommentById(query: IQueryComment): Promise<ICommentDocument> {
    //   const [comment]: ICommentDocument[] = await ReactionModel.aggregate([{ $match: query }]);
    //   return comment;
    // }
    getCommentNamesFromPost(query, sort) {
        return __awaiter(this, void 0, void 0, function* () {
            const comments = yield comment_schema_1.CommentsModel.aggregate([
                { $match: query },
                { $sort: sort },
                { $group: { _id: null, count: { $sum: 1 }, names: { $addToSet: '$username' } } },
                { $project: { _id: 0, count: 1, names: 1 } }
            ]);
            return comments[0];
        });
    }
}
exports.commentService = new CommentService();
//# sourceMappingURL=comment.service.js.map