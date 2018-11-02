const nextRoutes= require('next-routes');
const routes = nextRoutes();

// This file is used by both the client and the server

// [ML] Note: parameter must always be named 'slug', because of next-routes API

// Usage: routes.add(name, url, page_path)
routes.add('career','/career/:slug','/career')

module.exports = routes;