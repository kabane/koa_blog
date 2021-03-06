const Router = require('koa-router');
const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = {
    "status": "success",
    "json": {
      "message": "Hello"
    }
  }
});

module.exports = router;