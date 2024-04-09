import { IPostDocument } from '~post/interfaces/post.interface';
import { PostModel } from '~post/models/post.schema';
import { UserModel } from '~user/models/user.schema';

class PostService {
  public async createPost(data: IPostDocument): Promise<IPostDocument> {
    await UserModel.findOneAndUpdate({ _id: data.userId }, { $inc: { postsCount: 1 } });
    const createdPost: IPostDocument = await PostModel.create(data);

    return createdPost;
  }
  public async getAllPosts(): Promise<IPostDocument[]> {
    const posts: IPostDocument[] = await PostModel.find();

    return posts;
  }
  public async getAllPostsWithComments(): Promise<IPostDocument[]> {
    const posts: IPostDocument[] = await PostModel.aggregate([
      { $match: { _id: { $ne: '' } } },
      {
        $lookup: {
          from: 'Comment',
          localField: '_id',
          foreignField: 'postId',
          as: 'comments'
        }
      }
    ]);
    return posts;
  }
}

export const postService: PostService = new PostService();
