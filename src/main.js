// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueGtm from 'vue-gtm';
import App from './App';
import router from './router';

// TODO: Update the use of Api and Store
import api from './api/someApi';
import store from './store/someStore';

window.api = api;
// TODO: Update the use of Api and Store

Vue.use(VueGtm, {
  debug: true, // Whether or not display console logs debugs (optional)
  vueRouter: router, // Pass the router instance to automatically sync with router (optional)
  //ignoredViews: ['homepage'], If router you can exclude some routes names (optional)
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
