const express = require('express');
const morgan = require('morgan');

// config file and load env variables
const config = require('./app/config');
// main routes
const indexRoutes = require('./app/routes/index.routes');
// Not found handler
const { notFound } = require('./app/utils/middlewares/notFound');

class Server {
  app;
  constructor() {
    this.app = express();
    this.app.set('port', config.port);
  }

  beforeLoadRoutes() {
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  loadRoutes() {
    this.app.use(indexRoutes);
  }

  afterLoadRoutes() {
    this.app.use(notFound);
  }

  start() {
    this.beforeLoadRoutes();
    this.loadRoutes();
    this.afterLoadRoutes();
    this.app.listen(this.app.get('port'), this.listen());
  }

  listen() {
    return () => {
      console.log(`App Listen on port ${this.app.get('port')}`);
      console.log(`App is on mode: ${config.mode_name}`);
    };
  }
}

new Server().start();
