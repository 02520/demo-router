import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './MyHome.vue'
import Movie from './MyMovie.vue'
import About from './MyAbout.vue'

import Tab1 from './tabs/MyTab1.vue'
import Tab2 from './tabs/MyTab2.vue'

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active-router',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/movie', component: Movie },
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
