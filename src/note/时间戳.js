// 将时间戳转换成日期格式
export function ToShareFeedTimes (times, type) { // times为时间戳
  const date = new Date(times * 1000) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  const Y = date.getFullYear()
  const M = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
  const D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours())
  const m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  if (type === 1) {
    return Y + '/' + M + '/' + D
  }
  if (type === 2) {
    return h + ':' + m
  }
  if (type === 3) {
    return M + '月' + D + '日'
  }
  if (type === 4) {
    return Y + '-' + M + '-' + D + s
  }
}

// 将日期格式转换成时间戳
var date = new Date('2014-04-23 18:55:49:123')
// 有三种方式获取
var time1 = date.getTime() // 第一、第二种：会精确到毫秒
var time2 = date.valueOf() // 第三种：只能精确到秒，毫秒用000替代
var time3 = Date.parse(date)
console.log(time1) // 1398250549123
console.log(time2) // 1398250549123
console.log(time3) // 1398250549000

// 获得十位数的时间戳(13位/1000 四舍五入即可 获得Unix时间戳)
// const dateStamp = Math.round(new Date('2014-04-23 18:55:49:123').getTime() / 1000).toString() // 1398250549
// const dateStamp = Math.round(new Date().getTime() / 1000).toString()
