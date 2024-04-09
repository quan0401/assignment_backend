import mongoose, { model, Model, Schema } from 'mongoose';
import { IPostDocument } from '~post/interfaces/post.interface';

const postSchema: Schema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },
  imageUrl: { type: String },
  commentsCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

const PostModel: Model<IPostDocument> = model<IPostDocument>('Post', postSchema, 'Post');

export { PostModel };
