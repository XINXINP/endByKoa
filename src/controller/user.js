/*
 * @Descripttion: 🐉user 控制器
 * @Author: xinxin
 * @Date: 2020-06-15 12:27:09
 * @LastEditTime: 2020-06-15 14:21:33
 */ 
const {add} = require('../service/user')
//1.添加用户信息
async function addUser(ctx){
    let data = ctx.request.body;
    try {
       let result = await add(data);
       ctx.response.body = result;
    } catch (error) {
        ctx.response.body = {"message":false}
    }
    
}
module.exports ={addUser};
