# kdu
koa-data-usage

[![github](https://img.shields.io/github/followers/willin.svg?style=social&label=Follow)](https://github.com/willin) [![npm](https://img.shields.io/npm/v/kdu.svg)](https://npmjs.org/package/kdu) [![npm](https://img.shields.io/npm/dm/kdu.svg)](https://npmjs.org/package/kdu) [![npm](https://img.shields.io/npm/dt/kdu.svg)](https://npmjs.org/package/kdu)
## Usage

### Install

```bash
yarn add kdu
# or
npm i -S kdu
```

### Use

```js
// Source: ./kdu.js
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
```

```js
// Example:
const Koa = require('koa');
const kdu = require('./kdu');

const handler = async (len) => {
  console.log(len); // bytes
};
const app = new Koa();
app.use(kdu(handler));
app.use((ctx) => {
  ctx.body = {
    status: 1,
    data: 'Hello World'
  };
});

app.listen(3000);
```

## License

MIT

Donate Via Alipay：

![qr](https://cloud.githubusercontent.com/assets/1890238/15489630/fccbb9cc-2193-11e6-9fed-b93c59d6ef37.png)
