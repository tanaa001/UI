import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import ScheduleDetails from '@/components/ScheduleDetails'
import test from '@/components/test'


Vue.use(Vuex)
Vue.use(Router)

export default new Router({
  routes: [
  {
  	path: '/',
  	name: 'Login',
  	component: Login
  },
  {
  	path: '/main',
  	name: 'Main',
  	component: Main
  },
  {
  	path: '/scheduleDetails',
  	name: 'ScheduleDetails',
  	component: ScheduleDetails
  },    
  {
    path: '/test',
    name: 'test',
    component: test
  }  
  ] 
})