const Koa = require('koa');
const kdu = require('..'); // kdu

const handler = async (ctx, len) => {
  console.log(len);
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
