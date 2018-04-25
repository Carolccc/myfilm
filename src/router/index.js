import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import flim from '@/components/flim'
import item from '@/components/item'

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
      path:'/flim',
      component: flim
    },
    {
      path:'/item',
      component: item
    }
  ]
})
