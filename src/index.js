const assert = require('assert');

module.exports = (handler) => {
  if (handler) {
    assert(typeof handler === 'function', 'Error Handler Require Function');
  }

  return async (ctx, next) => {
    const result = await next();
    if (ctx.request.url === '/favicon.ico') {
      return result;
    }
    const len = typeof ctx.body === 'object' ? JSON.stringify(ctx.body).length : ctx.body.length;
    await handler(ctx, len);
    return result;
  };
};
