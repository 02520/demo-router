import { createApp } from 'vue'
import './assets/css/bootstrap.css'
import './index.css'

// import App from './components/01.easy-router/App.vue'
// import App from './components/02.start/App.vue'
// import App from './components/04.params/App.vue'
// import App from './components/05.named/App.vue'
// import App from './components/06.gurads/App.vue'
import App from './components/07.next/App.vue'

// import router from './components/02.start/router'
// import router from './components/04.params/router.js'
// import router from './components/05.named/router.js'
// import router from './components/06.gurads/router.js'
import router from './components/07.next/router.js'

const app = createApp(App)

// 挂载路由模块
app.use(router)

app.mount('#app')
