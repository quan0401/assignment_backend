import HTTP_STATUS from 'http-status-codes';
import { Request, Response } from 'express';
import { userService } from '~services/db/user.service';
import { IUserDocument } from '~user/interfaces/user.interface';

export class Signup {
  public async user(req: Request, res: Response): Promise<void> {
    const { username } = req.body;
    const user: IUserDocument = await userService.create({ username: username as string } as IUserDocument);
    res.status(HTTP_STATUS.CREATED).json({ message: 'create user successfully', user });
  }
}
