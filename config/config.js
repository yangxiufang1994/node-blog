const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'hello-nodeblog'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/hello-nodeblog-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'hello-nodeblog'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/hello-nodeblog-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'hello-nodeblog'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/hello-nodeblog-production'
  }
};

module.exports = config[env];
