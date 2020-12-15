window._ = require('lodash');
import Vue from 'vue'
import Vuex from 'vuex';
import VueConfirmDialog from 'vue-confirm-dialog'
import VueNotification from "vue-notification";
import VueMeta from 'vue-meta';
import ErrorHandling from './mixins/error-handling'
import VueProgressBar from 'vue-progressbar';
Vue.use(VueProgressBar, {})
window.Vuex = Vuex;
import VueSpinners from 'vue-spinners'
import ColourPicker from 'vue-colour-picker'
Vue.use(ColourPicker)
Vue.use(VueSpinners)
Vue.use(Vuex);
Vue.component('pagination', require('laravel-vue-pagination'));
Vue.mixin(ErrorHandling);

window.axios = require('axios');
Vue.prototype.$axios = axios;

Vue.use(VueMeta);
Vue.use(VueConfirmDialog);
Vue.use(VueNotification);
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)
Vue.use(require('vue-moment'));
const DEV_URL = 'http://localhost:8000';
const PROD_URL = 'https://elegancko.store';
axios.defaults.baseURL = PROD_URL+'/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
