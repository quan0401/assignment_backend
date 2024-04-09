import HTTP_STATUS from 'http-status-codes';
import { IUserDocument } from '~user/interfaces/user.interface';
import { Request, Response } from 'express';
import { userService } from '~services/db/user.service';
import { BadRequesetError } from '~global/helpers/error-handler';

export class Signin {
  public async user(req: Request, res: Response): Promise<void> {
    const { username } = req.body;
    const user: IUserDocument | null = await userService.findUserByUsernameIfNotCreate(username);
    if (!user) throw new BadRequesetError('User not found');
    req.session = { jwt: { userId: user._id, username: user.username } };

    res.status(HTTP_STATUS.OK).json({ message: `Welcome back ${user.username}`, user });
  }
}
