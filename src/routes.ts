import { Application } from 'express';
import { commentRoute } from '~comment/routes/comment.routes';
import { AuthMiddleware } from '~global/helpers/auth-middleware';
import { postRoutes } from '~post/routes/post.routes';
import { healthRoutes } from '~user/routes/health.routes';
import { userRoutes } from '~user/routes/user.routes';

const BASE_URL = '/api/v1';

export default (app: Application) => {
  const routes = () => {
    // app.use('/queues', serverAdapter.getRouter());

    app.use('', healthRoutes.health());
    app.use('', healthRoutes.env());
    app.use('', healthRoutes.instance());
    app.use('', healthRoutes.fiboRoute());

    app.use(`${BASE_URL}/user`, userRoutes.routes());

    // verify routes
    app.use(AuthMiddleware.prototype.verifyUser);
    app.use(`${BASE_URL}/post`, postRoutes.routes());
    app.use(`${BASE_URL}/comment`, commentRoute.routes());
    // app.use(`${BASE_URL}/follow`,  followerRoutes.routes());
    // app.use(`${BASE_URL}/nofitication`,  nofiticationRoutes.routes());
    // app.use(`${BASE_URL}/image`, imageRoutes.routes());
    // app.use(`${BASE_URL}/chat`,  chatRoutes.routes());
  };
  routes();
};
