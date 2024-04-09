import { DeletePost } from './../controllers/delete-post';
import { Router } from 'express';
import { CreatePost } from '~post/controllers/create-post';
import { GetPost } from '~post/controllers/get-post';
import { UpdatePost } from '~post/controllers/update-post';

class PostRoutes {
  private router: Router;
  constructor() {
    this.router = Router();
  }

  public routes(): Router {
    this.router.get('/', GetPost.prototype.getPosts);
    this.router.post('/', CreatePost.prototype.post);

    return this.router;
  }
}
export const postRoutes: PostRoutes = new PostRoutes();
