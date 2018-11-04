import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import Axios from 'axios'
import 'vuetify/dist/vuetify.min.css'
import _ from 'lodash'

Vue.use(Vuetify)

Vue.config.productionTip = false

Object.defineProperty(Vue.prototype, '$_', { value: _ })
Object.defineProperty(Vue.prototype, '$axios', { value: Axios })

/* eslint-disable no-new */
new Vue({
	_ : '$._',
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})
