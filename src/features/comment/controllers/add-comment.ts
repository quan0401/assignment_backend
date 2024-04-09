import { ObjectId } from 'mongodb';
import HTTP_STATUS from 'http-status-codes';
import { Request, Response } from 'express';
import { ICommentDocument } from '~comment/interfaces/comment.interface';
import { commentService } from '~services/db/comment.service';

export class AddComment {
  public async addComment(req: Request, res: Response): Promise<void> {
    const { postId, comment } = req.body;
    const commetObjectId: ObjectId = new ObjectId();

    const commentData: ICommentDocument = {
      _id: commetObjectId,
      userId: req.currentUser!.userId,
      postId,
      comment,
      createdAt: new Date()
    } as ICommentDocument;
    const response = await commentService.addCommentToDB(commentData);

    res.status(HTTP_STATUS.CREATED).json({ message: 'Comment created successfully', comment: response });
  }
}
