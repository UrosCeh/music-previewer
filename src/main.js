import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VuePlyr from 'vue-plyr'
 
// The second argument is optional and sets the default config values for every player.
Vue.use(VuePlyr, {
  plyr: {
    fullscreen: { enabled: false }
  },
  emit: ['ended']
})
require('@/assets/style.css')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
