import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import login from '@/components/login'
import mainContent from '@/components/main-content'
import test from '@/components/test'


Vue.use(Vuex)
Vue.use(Router)

export default new Router({
  routes: [
  {
  	path: '/',
  	name: 'login',
  	component: login
  },
  {
  	path: '/main',
  	name: 'main-content',
  	component: mainContent
  },
  {
    path: '/test',
    name: 'test',
    component: test
  }  
  ] 
})