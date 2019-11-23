import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/home/Layout.vue'
import Find from '@/views/zhaofang/Layout.vue'
import Roommate from '@/views/roommates/Roommate.vue'
import Apartment from '@/views/apartment/Apartment.vue'
import HouseDetail from '@/views/detail/Detail.vue'

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
  //找房
  {
    path: '/zhaofang/:id',
    name: 'find',
    component: Find
  },
  {
    path: '/zhaofang',
    name: 'zhaofang',
    redirect: '/zhaofang/ '
  },
  {
    path: '/roommate',
    redirect: '/roommate/1'
  },
  {
    path: '/roommate/:page',
    name: 'roommate',
    component: Roommate
  },
  {
    path: '/apartment',
    name: 'apartment',
    component: Apartment

  },
  {
    path: '/house/:id',
    name: 'houseDetail',
    component: HouseDetail
  }



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router