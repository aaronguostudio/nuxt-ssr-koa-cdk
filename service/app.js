const Koa = require('koa')
const cors = require('@koa/cors')
const app = module.exports = new Koa()
app.use(cors())
app.use(async ctx => {
  ctx.body = {
    name: 'Aaron Guo',
    title: 'Software Engineer',
    version: '1'
  }
})

if (!module.parent) app.listen(8000)
