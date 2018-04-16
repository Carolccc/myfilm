import Vue from 'vue'
import Router from 'vue-router'
import fisrt from '@/components/fisrt'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'fisrt',
      component:fisrt
    }
  ]
})
