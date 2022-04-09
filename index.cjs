const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const restful = require('./dist/restful.min.cjs');
restful.requestCallback = fetch;
module.exports = restful;
