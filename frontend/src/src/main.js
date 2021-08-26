import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(Vuex);

new Vue({
  render: h => h(App),
}).$mount('#app')
