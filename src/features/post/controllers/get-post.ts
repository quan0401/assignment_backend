import HTTP_STATUS from 'http-status-codes';
import { Request, Response } from 'express';
import { IPostDocument } from '~post/interfaces/post.interface';
import { postService } from '~services/db/post.service';

const PAGE_SIZE = 10;

export class GetPost {
  public async getPosts(req: Request, res: Response): Promise<void> {
    const posts: IPostDocument[] = await postService.getAllPostsWithComments();

    res.status(HTTP_STATUS.OK).json({ message: 'All posts', posts });
  }
}
