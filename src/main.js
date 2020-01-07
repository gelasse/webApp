import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import VuechatScroll from 'vue-chat-scroll'

Vue.config.productionTip = false
Vue.use(VuechatScroll)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
