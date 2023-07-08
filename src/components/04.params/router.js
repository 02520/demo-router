import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './MyHome.vue'
import Movie from './MyMovie.vue'
import About from './MyAbout.vue'

import Tab1 from './tabs/MyTab1.vue'
import Tab2 from './tabs/MyTab2.vue'

// 创建路由对象
const router = createRouter({
  // 指定路由的工作模式
  history: createWebHashHistory(),
  // 自定义路由高亮的 class 类
  linkActiveClass: 'active-router',
  // 声明路由的匹配规则
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/movie/:id', component: Movie, props: true },
    {
      path: '/about',
      component: About,
      redirect: '/about/tab1',
      // 通过 children 属性嵌套声明子集路由规则
      children: [
        { path: 'tab1', component: Tab1 },
        { path: 'tab2', component: Tab2 }
      ]
    }
  ]
})

export default router
