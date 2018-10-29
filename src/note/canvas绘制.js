// // 常用api的记忆 使用

// // 全局函数注册
// // 绘制单行文本
// // 绘制多行文本
// // 绘制圆形图片
// // 绘制单张图片
// // 绘制多张图片
// // 绘制圆角矩形

// // 绘制细节

// // canvas绘制生成图片
// // this.imgData = canvas.toDataURL('image/png');

// // canvas绘制以iphone6设计图为例 - 绘制固定样式的图片 - 然后自适应大小即可 也就是说可以简单的使用固定宽高即可 没必要自适应什么的
// // 看要求是不是 大小随图片变化/还是内容大小不变  两者-> 的区别在于图片宽高是否为手机屏幕大小
// // 绘制内容大小随图片同步变化

// // canvas绘制
// function drawCanvas () {
//   const canvas = document.createElement('canvas')
//   const context = canvas.getContext('2d')
//   if (!canvas.getContext) {
//     window.alert('您的设备不支持canvas哦～')
//     return;
//   }
//   // 设备像素比
//   const dpr = 2
//   canvas.width = xx * dpr
//   canvas.height = xx * dpr
//   canvas.style.width = xx + 'px'
//   canvas.style.height = xx + 'px'
//   const bg = new Image()
//   bg.crossOrigin = 'Anonymous' // 跨域 - 当不存在跨域时不能存在该行代码 - 爆炸💥的一天 - 一个跨域一个改行代码 花费了24个小时
//   bg.src = this.bg_url
//   bg.onload = () => {
//     const cw = canvas.width
//     const ch = canvas.height
//     const toDataURL = () => {
//       this.imgData = canvas.toDataURL('image/png')
//       this.loading = false
//     };
//   }
// }
