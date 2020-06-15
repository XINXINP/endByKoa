/*
 * @Descripttion: 🐉用户表参数配置
 * @Author: xinxin
 * @Date: 2020-06-15 12:28:24
 * @LastEditTime: 2020-06-15 13:01:24
 */ 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username:{type:'String'},
    passworld:{type:'String'}
},    
//选择timestamps字段为true，就会在所映射的集合中自动加上createdAt和updateAt两个字段
{ timestamps: true });
module.exports = mongoose.model('User',UserSchema);