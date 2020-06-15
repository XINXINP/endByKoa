/*
 * @Descripttion: 🐉 请求每个信息打印一些信息
 * @Author: xinxin
 * @Date: 2020-06-15 13:39:24
 * @LastEditTime: 2020-06-15 14:35:38
 */ 
async function logMessage(ctx){
    let time = formatDate(new Date());
    console.log('**********请求信息开始************')
    console.log(`接口API:${ctx.host}${ctx.url}`)
    console.log(`请求方法:${ctx.method}`)
    console.log(`请求时间:${time}`)
    console.log('**********请求信息结束************')

}
//时间转换
function formatDate(now) {
    var year=now.getFullYear(); 
    var month=now.getMonth()+1; 
    var date=now.getDate(); 
    var hour=now.getHours(); 
    var minute=now.getMinutes(); 
    var second=now.getSeconds(); 
    return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second; 
}
module.exports = {logMessage}