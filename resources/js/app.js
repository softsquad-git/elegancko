import Vue from 'vue';
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter);

import App from "./components/App";
import IndexPage from "./components/pages/IndexPage";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'IndexPage',
            component: IndexPage
        },
        {
            path: '/products',
            name: 'ProductsIndex',
            component: () => import('./components/pages/products/Index')
        },
        {
            path: '/product/:title/:id',
            name: 'ProductShow',
            component: () => import('./components/pages/products/Show')
        },
        {
            path: '/auth',
            component: () => import('./components/auth/AuthLayout'),
            children: [
                {
                    path: 'login',
                    name: 'Login',
                    component: () => import('./components/auth/Login')
                },
                {
                    path: 'register',
                    name: 'Register',
                    component: () => import('./components/auth/Register')
                }
            ]
        }
    ]
})

const app = new Vue({
    el: '#app',
    components: {App},
    router
});
