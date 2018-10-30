const express = require('express')
const next = require('next')
const routes = require('./routes.js')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const port = parseInt(process.env.PORT, 10) || 3000

const handler = routes.getRequestHandler(app)

app.prepare()
.then(() => {
  const server = express();
  // Middleware
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());
  if (dev) {
    server.use(morgan('dev'));
  }
  // Routes
  server.get('*', (req, res) => {
    return handler(req, res);
  });
  server.use(handler);

  // Server
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})