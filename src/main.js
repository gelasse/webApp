import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import * as firebase from 'firebase'
import VuechatScroll from 'vue-chat-scroll'
import store from './store'

Vue.config.productionTip = false
Vue.use(VuechatScroll)
firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
