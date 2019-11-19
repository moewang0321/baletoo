import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/home/Layout.vue'
import Find from '@/views/zhaofang/Layout.vue'

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Index
  },
  {
    path: '/zhaofang/:id',
    name: 'find',
    component: Find
  },
  {
    path: '/zhaofang',
    name: 'find',
    component: Find
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router