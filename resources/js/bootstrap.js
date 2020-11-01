window._ = require('lodash');
import Vue from 'vue'
import Vuex from 'vuex';
import VueConfirmDialog from 'vue-confirm-dialog'
import VueNotification from "vue-notification";
import VueMeta from 'vue-meta';

window.Vuex = Vuex;

Vue.use(Vuex);
Vue.component('pagination', require('laravel-vue-pagination'));

window.axios = require('axios');
Vue.prototype.$axios = axios;

Vue.use(VueMeta);
Vue.use(VueConfirmDialog);
Vue.use(VueNotification);
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)
Vue.use(require('vue-moment'));
const DEV_URL = 'http://localhost:8000';
const PROD_URL = 'https://elegancko.store';
axios.defaults.baseURL = DEV_URL+'/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
