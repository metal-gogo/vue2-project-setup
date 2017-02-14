// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

// TODO: Update the use of Api and Store
import api from './api/someApi';
import store from './store/someStore';

window.api = api;
// TODO: Update the use of Api and Store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
