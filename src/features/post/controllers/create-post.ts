import HTTP_STATUS from 'http-status-codes';
import { Request, Response } from 'express';
import { IPostDocument } from '~post/interfaces/post.interface';
import { uploads } from '~global/helpers/cloudinary-upload';
import { UploadApiResponse } from 'cloudinary';
import { BadRequesetError } from '~global/helpers/error-handler';
import { postService } from '~services/db/post.service';

export class CreatePost {
  public async post(req: Request, res: Response): Promise<void> {
    const { image } = req.body;
    const result: UploadApiResponse = (await uploads(image)) as UploadApiResponse;
    if (!result?.public_id) {
      throw new BadRequesetError('File upload: Error occured. Try again!');
    }
    const postData: IPostDocument = {
      userId: req.currentUser?.userId,
      imageUrl: result.url,
      commentsCount: 0
    } as IPostDocument;
    const post = await postService.createPost(postData);

    res.status(HTTP_STATUS.CREATED).json({ message: 'Create post successfully', post });
  }
}
