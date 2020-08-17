const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

const views = require('koa-views')
const co = require('co')
const convert = require('koa-convert')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const debug = require('debug')('koa2:server')
const path = require('path')
const config = require('./config')
const routes = require('./routes')



const port = process.env.PORT || config.port

// error handler
onerror(app)

// middlewares
app.use(bodyparser())
  .use(json())
  .use(logger())
  .use(require('koa-static')(__dirname + '/public'))
  .use(views(path.join(__dirname, '/views'), {
    options: {settings: {views: path.join(__dirname, 'views')}},
    map: {'njk': 'nunjucks'},
    extension: 'njk'
  }))
  .use(router.routes())
  .use(router.allowedMethods())

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - $ms`)
})

routes(router)
app.on('error', function(err, ctx) {
  console.log(err)
  logger.error('server error', err, ctx)
})




//813 
const {Schema} = mongoose
const studentsSchema = new Schema({
  'name':String,
  'gender':Number,
  'age':Number,
  'major':String
})
const studentsModel = mongoose.model('students',studentsSchema)

// router.get('/student',async(ctx,next)=>{
//   await ctx.render('student')
// })
// router.post('/student',async(ctx,next)=>{
//   try{
//     const data=ctx.request.body
//     const model=new studentsModel(data)
//     await model.save()
//     ctx.response.body={status:'success'}
//   }catch(error){
//     console.log(error)
//   }
   
// })












module.exports = app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`)
})
