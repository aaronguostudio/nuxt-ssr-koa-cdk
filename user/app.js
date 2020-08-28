const Koa = require('koa')
const app = module.exports = new Koa()

app.use(async ctx => {
  ctx.body = {
    name: 'User Service',
    title: 'User'
  }
})

if (!module.parent) app.listen(8000)
