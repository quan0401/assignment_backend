import HTTP_STATUS from 'http-status-codes';
import { Request, Response } from 'express';
import { commentService } from '~services/db/comment.service';
import { ICommentDocument, ICommentNameList } from '~comment/interfaces/comment.interface';
import mongoose from 'mongoose';
import { joiValidation } from '~global/decorators/joi-validation.decorators';
import { getCommentSchema } from '~comment/schemes/comment.scheme';

export class GetComment {
  @joiValidation(getCommentSchema, true)
  public async getCommentsOfPost(req: Request, res: Response): Promise<void> {
    const { postId } = req.params;
    const comments: ICommentDocument[] = await commentService.getCommentsFromPost(
      { postId: new mongoose.Types.ObjectId(postId) },
      { createdAt: -1 }
    );
    res.status(HTTP_STATUS.OK).json({ message: 'Get comments from post', comments, count: comments.length });
  }
}
