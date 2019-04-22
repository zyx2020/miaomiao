import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import mineRouster from './mine'
import cinemaRouster from './cinema'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    movieRouter,
    mineRouster,
    cinemaRouster,
    
    // 配置路由跳转到主页面
    {
      path : '/*',
      redirect : '/movie'
    }
  ]
})
