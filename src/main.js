// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import * as filters from '@/util/filters';
import infiniteScroll from 'vue-infinite-scroll';
import VueLazyload from 'vue-lazyload';
import App from './App';
import router from './router';
import store from './store';
import base from './util/base';
import './style/main.scss';

Vue.use(infiniteScroll);
Vue.use(VueLazyload);
Vue.use(base);

// 解决click事件300毫秒延迟·移动端
const FastClick = require('fastclick');

FastClick.attach(document.body);

// filters·全局
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
