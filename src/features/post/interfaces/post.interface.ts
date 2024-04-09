import mongoose, { Document } from 'mongoose';

export interface IPostDocument extends Document {
  _id?: string | mongoose.Types.ObjectId;
  userId: string;
  imageUrl: string;
  commentsCount: number;
  createdAt?: Date;
}
