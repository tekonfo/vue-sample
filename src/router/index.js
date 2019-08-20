import Vue from 'vue'
import Router from 'vue-router'
import ShowMap from '@/components/ShowMap'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShowMap',
      component: ShowMap
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
