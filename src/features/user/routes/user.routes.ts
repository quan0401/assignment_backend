import { Router } from 'express';
import { Signin } from '~user/controllers/signin';
import { Signup } from '~user/controllers/signup';

class UserRoutes {
  private router: Router;
  constructor() {
    this.router = Router();
  }
  public routes(): Router {
    this.router.post('/signup', Signup.prototype.user);
    this.router.post('/signin', Signin.prototype.user);

    return this.router;
  }
}

export const userRoutes: UserRoutes = new UserRoutes();
