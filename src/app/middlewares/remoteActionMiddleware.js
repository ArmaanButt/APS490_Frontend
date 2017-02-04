/* eslint no-unused-vars: ["error", { "args": "none" }]*/
const remoteActionMiddleware = store => next => action => next(action);

export default remoteActionMiddleware;
