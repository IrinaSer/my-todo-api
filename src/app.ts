import Koa from 'koa';
import Router from 'koa-router';
import fs from 'fs';
import path from 'path';

const app = new Koa();
const router = new Router();

const routesPath = path.join(__dirname, 'api/routes');

fs.readdirSync(routesPath).forEach((file) => {
    const route = require(`./api/routes/${file}`).default;
    router.use(route.routes()).use(route.allowedMethods());
});

app.use(router.routes()).use(router.allowedMethods());

export default app;
