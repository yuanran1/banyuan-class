const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

const views = require('koa-views')
const co = require('co')
const cors = require('koa2-cors');
const session=require('koa-session');
const convert = require('koa-convert')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const debug = require('debug')('koa2:server')
const path = require('path')

const config = require('./config')
const routes = require('./routes')
const { format } = require('path')

const port = process.env.PORT || config.port

// error handler
onerror(app)

app.keys=['banyuan'];
const CONFIG={
  key:'koa.sess'
};
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
  .use(session(CONFIG,app))
  .use(router.routes())
  .use(router.allowedMethods())

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - $ms`)
})
let news=[{
  name:'aa',
  id:'1'
},
{
  name:'bb',
  id:'2' 
},
{
  name:'cc',
  id:'3'
}
];
router.get('/', async (ctx, next) => {
  // ctx.body = 'Hello World'

  const{name}=ctx.request.body
  ctx.state = {
    title: ['banyuan','2222222'],
    content:'hello world',
    test:'test12312454',
    flag:false,
    gender:2,
    news:news
  }
  ctx.session.user={name};
  // console.log('user',ctx.session.user);
  //session的实现
  await ctx.render('index', ctx.state)
})


let tasks=[{
  name:'任务一',
  checked:false
},
{
  name:'任务二',
  checked:false
},
{
  name:'任务三',
  checked:false
},
{
  name:'任务四',
  checked:false
},
{
  name:'任务五',
  checked:false
}
]

router.get('/todolist',async(ctx,next)=>{
  ctx.state={
    tasks
  }
  await ctx.render('list', ctx.state)
})
//=========================todolist
//===============check
router.post('/checkTask',(ctx,next)=>{
  const{name,checked}=ctx.request.body;
  tasks.forEach((item)=>{
    if(item.name==name){
      item.checked=!item.checked;
    }
  });
  console.log(tasks);
  ctx.response.body={status:'success'}
})
//================= 添加
router.post('/addTask',(ctx,next)=>{
  const{name}=ctx.request.body;
  tasks.push({
    name,
    checked:false
  })
  console.log(tasks);;

  ctx.response.body={status:'success'}
})

//===============删除按钮事件
router.post('/closeEvent',(ctx,next)=>{
  const { name } = ctx.request.body;
  let index;
  tasks.forEach((item,i)=>{
    if (tasks[i].name === name){
      index=i;
    }
  });
  tasks.splice(index,1);
  // console.log(tasks)
  ctx.response.body={status:'success'}

})
// function search(tasks,name){
//   let i = tasks.length;
//   while(i-=1){
//     console.log(tasks[i].name);
//     console.log('name',name);
//       if (tasks[i].name === name){
        
//          console.log('in');
//          return i;
//       }
//   }
//   return false;
// }



//=================ajax
// router.post('/ajax',async(ctx,next)=>{
//   const query=ctx.request.body;

//   console.log(query);
//   if(query.status==='time'){
//     await sleep(5000);
//   }
//   ctx.response.body={status:'success'}
// })
// function sleep(time){
//   return new Promise((resolve,rejects)=>{
//     setTimeout(()=>{
//       resolve();
//     },time)
//   })
// }

//===================form
router.post('/checkName',(ctx,next)=>{
  const{name}=ctx.request.body;
  const names=['a','b','c'];
  let data={};
  if(names.indexOf(name)===-1){
    data.include=false;
  }else{
    data.include=true;
  }
  console.log(data);
  ctx.response.body=data;
})



//form表单
// router.post('/add',async(ctx,next)=>{
//   const {name,password}=ctx.request.body
//   let obj={
//     "name":"",
//     "password":""
//   }
//   ctx.response.body=obj

// })
// 第二题
// http://localhost:3000/add?a=4&b=1
// router.get('/add',async(ctx,next)=>{
//   const{a,b}=ctx.request.query;
//   ctx.response.body={
//     sum:Number(a)+ Number(b)
// }

// })
// 第三题
// router.post('./isPrime',(ctx,next)=>{
//   let(number)=ctx.request.body;
//   number=Number(number);
//   const flag=isPrime(Number(number));
//   let data={};
//   if(flag){
//     data.isPrime=true;
//   }else{
//     data.isPrime=false;
//     number++;
//   }
//   while(!isPrime(number)){
//     number++;
//   }
//   // for(let i=0;i<100000;i++){
//   //   number++;
//   // }
//   data.number=number;
//   ctx.response.body=data
// })
// function isPrime(n){
//   for(var i=2;i<n;i++){
//     if(n%i==0){
//       return false;
//     }
//   }
//   return true
// }

//======================cookies==================
router.get('/login',async(ctx,next)=>{
  await ctx.render("login");

})
router.post('/login',async(ctx,next)=>{
  // ctx.response.body={status:'success'};
  const{name,password}=ctx.request.body;
  let data=JSON.stringify({name,password})
  //验证操作(略)
  ctx.session.user = data ;
  console.log (ctx.session.user)//,{maxAge:4*1000}颁发cookies,4s后清空
  ctx.response.body={
    status :'success'
  }
  // const user=ctx.cookies.get('user')
  // console.log(user);
})

router.get('/loginTest',async(ctx,next)=>{
    //验证操作 略
    let user;
  if(ctx.cookies.get('user')){
    user=JSON.parse(ctx.cookies.get('user'));
  }
  // console.log('user',name);
  if(user){
    //如果拿到cookies
    await ctx.render('a');
    //登录后,转到页面a
  }else{
    ctx.redirect('/login');
    //没有登录的话跳到登录网站
  }
})




routes(router)
app.on('error', function(err, ctx) {
  console.log(err)
  logger.error('server error', err, ctx)
})

module.exports = app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`)
})
