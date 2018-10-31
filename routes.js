const nextRoutes= require('next-routes');
const routes = nextRoutes();

// This file is used by both the client and the server
routes.add('career','/career/:slug','/career')
// routes.add('generic', '/:pagename')

module.exports = routes;