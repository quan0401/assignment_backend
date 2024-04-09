import { IUserDocument } from '~user/interfaces/user.interface';
import { UserModel } from '~user/models/user.schema';

class UserService {
  public async create(data: IUserDocument): Promise<IUserDocument> {
    const result: IUserDocument = await UserModel.create(data);
    return result;
  }
  public async findUserByUsername(username: string): Promise<IUserDocument | null> {
    const result: IUserDocument | null = (await UserModel.findOne({ username })) as IUserDocument | null;
    return result;
  }
  public async findUserByUsernameIfNotCreate(username: string): Promise<IUserDocument | null> {
    const user: IUserDocument = await UserModel.findOneAndUpdate({ username }, {}, { upsert: true, new: true, setDefaultsOnInsert: true });
    return user;
  }
}

export const userService: UserService = new UserService();
