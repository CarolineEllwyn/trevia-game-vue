import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Question from './components/Question.vue'
import Results from './components/Results.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/question', component: Question},
  { path: '/results', component: Results}
]

const router = new VueRouter({routes})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
