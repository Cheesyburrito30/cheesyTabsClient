// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import {sync} from 'vuex-router-sync'
import '../node_modules/vuetify/dist/vuetify.min.css'
import store from '@/store/store'
import Panel from '@/components/panel'

Vue.config.productionTip = false
Vue.component('panel', Panel)

Vue.use(Vuetify)
sync(store, router) 
/* eslint-disable no-new */
new Vue({
	//which element is on the page, this is root el. set to ID on div inside of index.html
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
