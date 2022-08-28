import Koa from 'koa';
import koaBody from 'koa-body';

const app = new Koa({
  proxy: true,
  proxyIpHeader: 'X-Real-IP',
  maxIpsCount: 2,
});

app.use(koaBody());
app.use(async (ctx) => {
  console.log(ctx.request.headers);
  ctx.body = {
    message: 'api response',
  };
});

app.listen(3000);
console.log('api listening...');
