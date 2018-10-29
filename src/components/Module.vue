<template>
<div>
<!-- 样式判断 -->
  <div :class="[className, {classname: select}]" :style="{css: cssValue}"></div>
<!-- actionsheet vux 模拟弹出框 重点在于选项及相应的点击操作 类似的vux常用组件 XInput XDialog-->
  <button @click="showAcitonSheet">actionsheet</button>
  <actionsheet
    v-model="actionsheetShow"
    :menus="menus"
    show-cancel
    @on-click-menu="clickActionSheet"
    @on-click-menu-cancel="hideAcitonSheet()"
    cancel-text="取消"
  >
  </actionsheet>
</div>
</template>
<script>
// import 
import { mapGetters, mapActions, mapStatee } from 'vuex'; // vuex
import { Loading, Actionsheet, TransferDomDirective as TransferDom  } from 'vux'; // vux
import axios from 'axios'; // axios
import { updateWeixinApi } from '@/store/actions'; // 微信接口
import { ToSingleTime, substr, addimgheader, GetUrlMainPath } from '@/util/filters'; // filter
import { clockAnaBg, clockAna, uploadImageMedia, clockPerson, alterClockPerson } from '@/store/api'; // api
import Share from '@/components/Share'; // 组件引入 不加花括号

export default {
  directives: {
    TransferDom,
  },
  data() {
    return {
      // 模版数据
      userAvatar: window.$render_data.user.avatar,
      forumCode: window.$render_data.forum.forumCode, // forumId
      commonUrl: window.$render_data.common.common_url, // qiniu_url
      // data
      className: 'classname', // 代替的class name,
      firstName: '',
      secondName: '',
      select: false, // 条件判断
      cssValue: 'color/num/...', // singleStyle 单一样式 否则就将使用 :class
      actionsheetShow: false, // 模拟弹出框 显示与否
      menus: {}, // 模拟弹出框选项
    };
  },
  props: {
    replyType: {
      type: Number,
      default() {
        return 0;
      }
    }
  },
  created() {
    //...
  },
  components: {
    Loading,
    Actionsheet,
  },
  watch: {
    //...
  },
  computed: {
    ...mapGetters({
      isReply: 'getCommentBoxType'
    }),
    ...mapState({
      showBox: 'comment'
    }),
    className: {
      // getter
      get() {
        return this.firstName + '' + this.secondName
      },
      set(val) {
        const name = val.split('')
        this.firstName = name[0]
        this.secondName = name[name.length - 1]
      }
    }
  },
  methods: {
    ...mapActions([
      'signSuccess'
    ]),
    vueRouter() { // 路由跳转
      this.$router.push({ name: 'xxx' });
      this.$router.push({ name: 'xxx', params: { id: id } }); // url id  this.$route.params.id
      this.$router.push({ name: 'xxx', query: { id: id } }); // url 参数
    },
    // vux toast·全局注册
    // this.$vux.toast.show({
    //   text: '早安语录不能为空',
    //   type: 'warn',
    //   time: 1500
    // });
    showAcitonSheet() { // 显示模拟弹出框 并赋值menus·判断
      this.actionsheetShow = true;
      this.menus = {
        'title.noop': '选择支付方式', // title
        balance: `选项一`, // 相应选项含义
        wechat: '选项二'
      };
    },
    clickActionSheet(key) { // 点击相应选项后执行以下操作
      switch (key) {
        case 'balance':
          // 判断·return 终止函数
          if (this.rewardMoney > this.userBalance) {
            window.alert('支付金额不能大于当前您的账户余额');
            return;
          }
          // 跳转·other
          break;
        case 'wechat':
          // 跳转·other
          break;
        default: // 默认操作
          break;
      }
    },
  },
}
</script>




