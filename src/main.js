import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import axios from 'axios'
import 'buefy/dist/buefy.css'
import 'vue-material-design-icons/styles.css';

Vue.use(Buefy)

Vue.config.productionTip = false

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/"

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
