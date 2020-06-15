<!--
 * @Descripttion: 🐉
 * @Author: xinxin
 * @Date: 2020-06-15 16:47:57
 * @LastEditTime: 2020-06-15 16:56:12
--> 
## 前言
- 项目： 基于koa搭建的http服务（node小后台）
- 描述：
      -- 1.用于前端开发人员测试使用 
      -- 2. 后台搭建基础模板 
## 优点
- 很轻很小，很灵活
- 注释详细，入手超快
- 非常适合做node后台的基础模板，节约时间成本
- 文件结构清晰，“麻雀虽小，五脏俱全”
- 扩展性很好
## 项目基础环境
- [node环境（建议大于6.0 稳定版本）](https://nodejs.org/zh-cn/)
- 安装[一个Robot3T](https://robomongo.org/)，用于查看数据库里的数据
## 运行项目步骤
- 1.下载解压后，打开文件，安装依赖 npm install
- 2.安装完依赖后， 输入 node app.js
## 已完成的功能
- 支持mongo数据库存储
- 支持视图管理模块
- 支持跨域
- 支持静态资源管理
- 采用MVC模式开发，文件目录整洁简单
- 可以用作后台开发的基础模板
- 。。。
## 文件目录
     
├─config
│      db.js
│      log.js
│      
│      
├─src
│  │  
│  │ 
│  │  
│  ├─controller
│  │  
│  │  
│  │─service
│  │
│  │      
│  │     
│  │─static
│  │         
│  │          
│  │          
│  ├─model
│  │      
│  │      
│  ├─router
│  │      index.js
│  │      
│  └─view
│          index.ejs
└─app.js
│
└─package.json
## 所用插件
- ejs: "^3.1.3",
- koa: "^2.12.1",
- koa-router: "^9.0.1",
- koa-static: "^5.0.0",
- koa-views: "^6.2.3",
- koa2-cors: "^2.0.6"
- koa-bodyparser: "^4.3.0",
- mongoose: "^5.9.18
## 相关资料
[基于 Node.js 平台的下一代 web 开发框架](https://koa.bootcss.com/)
## 联系方式
- 如果有任何想法，欢迎QQ联系 3537731704
- 微信搜索雾灵小卷订阅号
## 点个star,支持一下作者，感谢！
