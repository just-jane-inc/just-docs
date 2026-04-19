import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

export const onRequest = defineRouteMiddleware((context) => {
    const { starlightRoute } = context.locals;

    starlightRoute.hasSidebar = starlightRoute.hasSidebar || starlightRoute.id === '';
});