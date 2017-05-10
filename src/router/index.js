import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Gameover from '@/components/Gameover'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/gameover',
      name: 'gameover',
      component: Gameover
    }
  ]
})
