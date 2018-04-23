import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import registered from '@/components/registered'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component: index
    },
    {
      path:'/index',
      component: index
    },
    {
      path:'/registered',
      component: registered
    }
  ]
})
