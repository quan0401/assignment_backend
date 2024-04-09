import { Router } from 'express';
import { AddComment } from '~comment/controllers/add-comment';
import { GetComment } from '~comment/controllers/get-comment';

class CommentRoute {
  private router: Router;
  constructor() {
    this.router = Router();
  }

  public routes(): Router {
    this.router.get('/:postId', GetComment.prototype.getCommentsOfPost);

    this.router.post('/', AddComment.prototype.addComment);

    return this.router;
  }
}

export const commentRoute: CommentRoute = new CommentRoute();
