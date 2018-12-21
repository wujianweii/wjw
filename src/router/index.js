import Vue from 'vue';
import Router from 'vue-router';
// import store from '@/store/index' // 引入store

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('./home')
    },
    {
      path: '/note',
      name: 'note',
      component: () => import('./note')
    },
    {
      path: '/hello/world',
      name: 'hello-world',
      component: () => import('@/components/HelloWorld')
    },
    {
      path: '/life/cycle',
      name: 'life-cycle',
      component: () => import('@/components/LifeCycle')
    },
    {
      path: '*',
      redirect: '/note'
    },
    {
      path: '/flex',
      name: 'flex',
      component: () => import('@/components/Flex')
    }
  ]
});
