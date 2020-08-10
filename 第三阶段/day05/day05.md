```js
//day06
const Koa = require('koa')
const Router = require('koa-router')
const cors = require('koa2-cors');
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

const { SSL_OP_EPHEMERAL_RSA } = require('constants')
const { resolve } = require('path')
const { rejects } = require('assert')

const port = process.env.PORT || config.port

// error handler
onerror(app)

// middlewares
app.use(bodyparser())
  .use(json())
  .use(logger())
  .use(cors({
    credentials: true,
  }))
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







//day05

// router.get('/add', async (ctx, next) => {
  
//   let {a,b} = ctx.request.query
//   console.log(a);
//   console.log(b);
//   ctx.response.body={
//     sum:Number(a)+Number(b)
//   }
  
// })

// router.post('/isPrime', async (ctx, next) => {
  
//   let {number} = ctx.request.body
//   number = Number(number);
//   const flag = isPrime(Number(number))
//   let data = {}
//   if(flag){
//     data.isPrime = true
//   }
//   else{
//     data.isPrime = false;
//     number++;
//     while(!isPrime(number)){
//       number++;
//     }
//   }
//   ctx.response.body = data;
  
// })
// function isPrime(n){
//   for(var i=2;i<n;i++){
//     if(num%i==0){
//       return  false;
//     }     
//   }
//   return true;
// }

// router.get('/', async (ctx, next) => {
  
//     let {name,password} = ctx.request.query
  
//   let obj = {
//     name:123,
//     password:234
//   }
//     ctx.response.body=obj
//   })

// router.post('/post', async (ctx, next) => {
  
//     let {name,password} = ctx.request.body
//     ctx.response.body = {
//       name:111,
//       password:222
//     }
// })









// router.post('/banyuan/ajax',async function(ctx,next){
//   const query = ctx.request.body;

//   if(query.status==='time'){
//     await sleep(5000);
//   }
//   ctx.response.body={status:'success'}
// })

// //延时
// function sleep(time){
//   return new Promise((resolve,rejects)=>{
//     setTimeout(()=>{
//       resolve();
//     },time)
//   })
// }



// router.post('/form',(ctx,next)=>{
//   const {name,password} = ctx.request.body;
//   console.log('name==>',name);
//   console.log('password==>',password);
//   ctx.response.body = {status:success};
// })

router.post('/checkName',(ctx,next)=>{
  const {name} = ctx.request.body;

  let data = checkName(name);

    ctx.response.body = data;//==>{flag : true/false,message:''}
})


router.post('/sendMessage',(ctx,next)=>{

  let data = { status:'success'}
  
  const {name,password} = ctx.request.body;

  let nameResult = checkName(name);

  if(nameResult.flag){
    let passwordResult = checkPassword(password);

    if(!passwordResult){
      data.status = 'failed';
      data.message = '密码格式错误，password的长度不小于8位，不大于15位'

    }
  }else{
    data.status = 'failed';
    data.message = nameResult.message;

  }

    ctx.response.body = data;//==>{flag : true/false,message:''}
})



//8.08
function checkName(name){
  let data={
    flag:true
  }
  //正则
  var partten = /^[a-zA-Z0-9_-]{4,16}$/;
  let flag = partten.test(name);

  if(flag){
    const names = ['isen','lucy','tom'];

    if(names.indexOf(name) === -1){
      // data.include = false;
    }else{
      // data.include = true;
      data.flag = false;
      data.message = '用户名重复'
    }
  }else{
    data.flag = false;
    data.message = '用户名输入错误，4到16位，字母，数字，下划线，减号'
  }
  return data;

  
}

function checkPassword(password){

  var partten = /^\w{8,15}$/;
  return partten.test(password);
}










routes(router)
app.on('error', function(err, ctx) {
  console.log(err)
  logger.error('server error', err, ctx)
})

module.exports = app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`)
})

```

