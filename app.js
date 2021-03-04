let db = require('./models');
const Koa = require('koa');
const app = new Koa();

app.on('error', err => {
  console.log('server error', err)
});

app.use(async (ctx, next) => {
  await next();
  const user = await db.user.findByPk(1)
  const rt = ctx.response.get('X-Response-Time')
  if (user === null) {
    console.log('not found user')
  } else {
    console.log('age --------', await user, await user.age)
  }
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
	console.log(2)
});

app.use(async ctx => {
  ctx.body = 'Hello World';
	console.log(1)
});

app.on('error', err => {
  log.error('server error', err)
});

app.listen(3000);
