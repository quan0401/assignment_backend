"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comment_routes_1 = require("./features/comment/routes/comment.routes");
const auth_middleware_1 = require("./shared/globals/helpers/auth-middleware");
const post_routes_1 = require("./features/post/routes/post.routes");
const health_routes_1 = require("./features/user/routes/health.routes");
const user_routes_1 = require("./features/user/routes/user.routes");
const BASE_URL = '/api/v1';
exports.default = (app) => {
    const routes = () => {
        // app.use('/queues', serverAdapter.getRouter());
        app.use('', health_routes_1.healthRoutes.health());
        app.use('', health_routes_1.healthRoutes.env());
        app.use('', health_routes_1.healthRoutes.instance());
        app.use('', health_routes_1.healthRoutes.fiboRoute());
        app.use(`${BASE_URL}/user`, user_routes_1.userRoutes.routes());
        // verify routes
        app.use(auth_middleware_1.AuthMiddleware.prototype.verifyUser);
        app.use(`${BASE_URL}/post`, post_routes_1.postRoutes.routes());
        app.use(`${BASE_URL}/comment`, comment_routes_1.commentRoute.routes());
        // app.use(`${BASE_URL}/follow`,  followerRoutes.routes());
        // app.use(`${BASE_URL}/nofitication`,  nofiticationRoutes.routes());
        // app.use(`${BASE_URL}/image`, imageRoutes.routes());
        // app.use(`${BASE_URL}/chat`,  chatRoutes.routes());
    };
    routes();
};
//# sourceMappingURL=routes.js.map