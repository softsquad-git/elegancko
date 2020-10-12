window._ = require('lodash');
import Vue from 'vue'

window.axios = require('axios')
Vue.prototype.$axios = axios;

axios.defaults.baseURL = 'http://localhost:8000/api/'

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
