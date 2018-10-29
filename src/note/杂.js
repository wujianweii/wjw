// // 思想：
// // 改重复需求的时候在改完之后先细致的自我检查一遍（防止遗漏 自我测试也应当是一种能力 而不是让测试给你找出一大堆错误）
// // 要么先在本地测试一遍（而不是自我感觉改完之后立马打包上线 一遍又一遍 极度浪费时间/）（修复bug的时候最好都先在本地进行测试
// // 除非真的能够保证准确无误在打包上传）

// // 工作的时候别人看到的是你有没有实现最终效果,但自己是否思考,是否去总结,决定着你的工作是否轻松,也决定着是否有所进步,有所成长,有所收获

// //该如何学习 当初初始看vue文档·以及项目时很难受·学习过程中遇到的挫折·该如何学习思考

// // 遇到问题·解决问题的能力
// 1. // 自己思考·百度等各种方式
// 2. // 寻求解决办法

// // 文本截取 filters
// export function substrname(text, num) {
//   if (text.length > num) {
//     return `${text.substring(0, num)}...`;
//   }
//   return text;
// }

// // filters全局注册
// // main.js
// import * as filters from '@/util/filters';
// Object.keys(filters).forEach((key) => {
//   Vue.filter(key, filters[key]);
// });
// // filters.js
// export function functionName() {
//   // ...
// }

// // 全局函数引入
// import canvas from '@/util/canvas'; // canvas为js文件名
// Vue.use(canvas);
// //canvas.js
// export default{
//   install(Vue, options) {
//     Vue.prototype.functionName = () => {
//       // ...
//     };
//   }
// }

// // 跳转 window.location
// window.location.href
// window.location.replace

// // callback 回调函数
// function demo(callback) {
//   const callBack = callback ? callback() : null;
//   callBack; // 不会运行 输出代码
//   callBack(); // 运行代码
// }

// // 提取富文本 <p v-html="html">富文本展示</p>
// // 1. 正则
// export function StringHTML1(html) {
//   const re1 = new RegExp('<.+?>', 'g');// 匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
//   const msg = String(html).replace(re1, '');// 执行替换成空字符
//   return msg;
// }
// // 通过html的方法 js基础a
// export function StringHTML2(html) {
//   const text = document.createElement('div');
//   text.innerHTML = html;
//   return text.value;
// }

// // 需求回顾整理·有所得

// 邀请新用户
// 1. // canvas绘制 canvas.widht canvas.height 即为toDataURL生成图片的宽高 若是想要图片自适应 那么canvas如何编写无碍 cw * % 或是 px具体像素均可 -.> 均以iphone设计图为模板图片
// //选择 以最佳方式·也是最简单的方式来写canvas吧 - 以固定px来写·两倍大小 - 不然图片放大容易失真
// 2. // canvas全局函数注册使用
// 3. // 回调函数

// 推广贴
// 1. // 父传子 -.> 子传父
// // :is_ture="isTrue" 不支持驼峰格式
// // export default {
// //   props: {
// //     isTrue: {
// //       type: Boolean, // 类型
// //       required: true, // 传值是否必须
// //       default: false // 默认值
// //     }
// //   }
// // }
// 2. // 熟悉项目·微贴部分
// // TopFeedList.vue 为置顶贴组件
// // FeedList.vue 为普通发帖组件

// 余额支付
// 1. //Actionsheet vux组件
// /*
// <actionsheet
//   v-model="actionsheetShow"
//   :menus="menus"
//   show-cancel // 是否显示取消菜单，对安卓风格无效
//   @on-click-menu="clickActionSheet" // 点击菜单时触发
//   @on-click-menu-cancel="hideAcitonSheet()" //点击取消菜单时触发
//   cancel-text="取消"
// >
// */
// // this.menus = {
// //   'title.noop': 'title',
// //   balance: '选项一', // 相应选项含义
// //   wechat: '选项二'
// // }
// // clickActionSheet(key) { // 点击相应选项后执行以下操作
// //   switch (key) {
// //     case 'balance':
// //       // 判断·return 终止函数
// //       if (this.rewardMoney > this.userBalance) {
// //         window.alert('支付金额不能大于当前您的账户余额');
// //         return;
// //       }
// //       // 跳转·other
// //       break;
// //     case 'wechat':
// //       // 跳转·other
// //       break;
// //     default: // 默认操作
// //       break;
// //   }
// // }
// 2. //支付完成后返回二次支付bug 困扰了许久 都没有解决
// // window.location.replace 用新的文档替换当前文档 当前页面不会保留历史记录 //在浏览器的历史列表中，新文档将替换当前文档。

// 微贴分享

// 购买链接
// 1. //Flex

// 专业版打卡
// 1. //

// 设悦打卡
// 九号玩家
// 热点
// 1. // 下拉加载自动

// // 本地mock数据的导入使用
// // 样式更改 :style :class
// // axios请求·id·pramas res.data.data(会在外面包一层data)

// // 获取数组中的值时会报错·undefined

// // 定制需求应当重新编写·为了简化逻辑·也是为了更方便的完成定制·面目全非之时
// // 视频课程

// // 统一支付页面·发现问题·找到问题·具体问题原因·-.>就是需要看项目代码的·还是需要静下心来看代码的呀·一词一句的查

// // npm
// // npm install
// // npm run dev
// // sudo npm run build

// // 上传图片·微信api
// function handlePicture() {
//   wx.chooseImage({
//     count: 1, // 默认9
//     sourceType: [
//       'album', 'camera'
//     ], // 可以指定来源是相册还是相机，默认二者都有
//     sizeType: ['compressed'],
//     success: (res) => {
//       this.uploadPhotos(res.localIds);
//     },
//     error: (err) => {
//       alert('相机选择器模块载入错误');
//       console.log(err);
//     }
//   });
// };
// function uploadPhotos(localIds) {
//   wx.uploadImage({
//     localId: String(localIds),
//     isShowProgressTips: 1,
//     success: (result) => {
//       const serverId = result.serverId;
//       uploadImageMedia({
//         forum_id: window.$render_data.forum.forumId,
//         referer: `${window.location.protocol}//${window.location.host}`,
//         medias_id: [result.serverId]
//       }).then((response) => {
//         if (response.data.code === 1) {
//           Object.keys(response.data.data).forEach((key) => {
//             this.bg_url = `${this.qiniu}${response.data.data[key]}`;
//           });
//         } else {
//           alert(response.data.msg);
//         }
//       }, () => {
//         alert('网络错误, 上传图片失败');
//         return;
//       });
//     },
//     error: () => {
//       alert('下载本地图片失败');
//     },
//     fail: (err) => {
//       alert('下载本地图片失败');
//     }
//   });
// };

// // 下拉加载
// /* <div
//   v-infinite-scroll="getList"
//   infinite-scroll-disabled="busy"
//   infinite-scroll-distance="40">
// </div>
// computed: {
//   busy() {
//     if (this.myloading || !this.mysuccess || !this.myhasMore) {
//       return true;
//     }
//     return false;
//   }
// } */

// window.frames
