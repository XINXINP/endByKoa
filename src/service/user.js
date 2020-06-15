/*
 * @Descripttion: 🐉
 * @Author: xinxin
 * @Date: 2020-06-15 12:28:54
 * @LastEditTime: 2020-06-15 12:53:45
 */ 
const User = require('../model/user')
async function add (data){
    try{
        return await User.create(data);
    }catch (err){
        console.log(err);
        return false
    }

}
module.exports = {add};