import mongoose, { Document } from 'mongoose';
import { ObjectId } from 'mongodb';
declare global {
  namespace Express {
    interface Request {
      currentUser?: AuthPayload;
    }
  }
}

export interface AuthPayload {
  userId: string;
  username: string;
  iat?: number;
}

export interface IUserDocument extends Document {
  _id: string | ObjectId;
  username?: string;
  postsCount?: number;
  profilePicture?: string;
  createdAt?: Date;
}
