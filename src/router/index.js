import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/store/index' 引入store

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('./home')
    },
    {
      path: '/hello/world',
      name: 'hello-world',
      component: () => import('@/components/HelloWorld')
    }
  ]
})
