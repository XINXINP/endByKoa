/*
 * @Descripttion: 🐉app.js入口文件
 * @Author: xinxin
 * @Date: 2020-06-15 11:52:59
 * @LastEditTime: 2020-06-15 16:35:50
 */ 
const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const path = require('path')
//===============视图管理模块===============
const views = require('koa-views');
app.use(views(path.join(__dirname, './src/view'), {
    extension: 'ejs'
}));
//===============允许跨域请求==============
const cors = require('koa2-cors');
app.use(cors());
// ===============接收post方法传过来的参数==============
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());
// ===============路由引入==============
const router = require('./router/index');
const {logEnd} = require('./config/log');
app.use(router.routes()).use(router.allowedMethods());
// ===============数据库mongo引入==============
const mongo = require('./config/db,js');
mongo();
//===============静态资源管理器===============
const static = require('koa-static')   //静态资源服务插件
const staticPath = './src/static'
app.use(static(path.join(__dirname,staticPath)))
// ===============设置监听端口==============
app.listen(9527,()=>{
    console.log('服务启动成功了')
});