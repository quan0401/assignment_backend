import { IUserDocument } from '~user/interfaces/user.interface';
import { model, Model, Schema } from 'mongoose';

const userSchema: Schema = new Schema({
  username: { type: String },
  postsCount: { type: Number, default: 0 },
  profilePicture: { type: String, default: 'https://res.cloudinary.com/dg3fsapzu/image/upload/v1712593534/gzmjjep3zxd6cpu801li.jpg' }
});

const UserModel: Model<IUserDocument> = model<IUserDocument>('User', userSchema, 'User');
export { UserModel };
