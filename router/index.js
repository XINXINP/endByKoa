/*
 * @Descripttion: 🐉后台路由配置文件
 * @Author: xinxin
 * @Date: 2020-06-15 12:18:13
 * @LastEditTime: 2020-06-15 16:32:20
 */ 
//===============引用插件===============
const Router = require('koa-router');
const router = new Router();
const {logMessage} = require('../config/log');
//===============控制器引入==============
const {addUser} = require('../src/controller/user')
//===============路径配置===============
//
router.get('/',async(ctx)=>{
    let title = "hello Koa2"
    await ctx.render('index',{
        title
    }); // render 渲染方法，这里加载到 views/index.ejs 文件 | 第二参数是传参到模版
});
//1.添加用户信息 /addUser
router.post('/addUser',async (ctx,next)=>{
    await addUser(ctx);
    logMessage(ctx);
});
//===============路由导出===============
module.exports = router;