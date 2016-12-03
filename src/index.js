'use strict';

const hostname = '127.0.0.1';
const port = 3000;

const app = require('koa')();
// const telegram = require('./scripts/test.js');
// const router = require('./router.js');
//const db = require('./config/db.js');

// app.use(router.routes());


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
