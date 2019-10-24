
// import Vue from './packages/vue.mjs' Currently not possible, vuetify doesnt like vue EMS
import httpVueLoader from './packages/ems/httpVueLoader.mjs'
import VueRouter from './packages/ems/vue-router.mjs'

const router = new VueRouter({
  routes: [{
    path: '/',
    component: httpVueLoader('./views/home/index.vue'),
    name: 'home'
  }, {
    path: '/profile',
    component: httpVueLoader('./views/profile/index.vue'),
    name: 'profile'
  }]
})

var app = new Vue({
  el: '#app', // This should be the same as your <div id=""> from earlier.
  vuetify: new Vuetify({
    iconfont: 'fa',
    theme: {
      themes: {
        light: {
          primary: '#2d4052',
          secondary: '#57be8e'
        }
      }
    }
  }),
  components: {
    'app': httpVueLoader('./App/index.vue')
  },
  router,
  template: '<app></app>'
})
