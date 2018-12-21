import Vue from 'vue';
import axios from 'axios';

const FORUMCODE = window.$render_data.forum.forumCode;
Vue.prototype.$ajax = axios;
// 设置默认请求头
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
// 添加响应拦截器
axios.interceptors.response.use((res) => {
  const data = res;
  if (res.data.code === 401) {
    window.location.href = res.data.jump_url;
  }
  return data;
});

// 微信api接口
export const getWeixinApi = (params) => axios.post(`/c/${FORUMCODE}/wexin-js`, params);
// 获取first
export const getFirst = () => axios.get(`/c/${FORUMCODE}/first`);
