import Vue from 'vue';
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter);
require('./bootstrap');

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
        },
        {
            path: '/admin',
            component: () => import('./components/admin/AdminLayout'),
            children: [
                {
                    path: '',
                    component: () => import('./components/admin/AdminPageIndex'),
                    name: 'AdminPageIndex'
                },
                {
                    path: 'products',
                    component: () => import('./components/admin/products/AdminProductsList'),
                    name: 'AdminProductsList'
                },
                {
                    path: 'product/:action/:id?',
                    component: () => import('./components/admin/products/AdminDataProduct'),
                    name: 'AdminDataProduct'
                },
                {
                    path: 'categories',
                    component: () => import('./components/admin/categories/AdminCategoriesList'),
                    name: 'AdminCategoriesList'
                },
                {
                    path: 'category/:action/:id?',
                    component: () => import('./components/admin/categories/AdminDataCategory'),
                    name: 'AdminDataCategory'
                },
                {
                    path: 'users',
                    component: () => import('./components/admin/users/AdminUsersList'),
                    name: 'AdminUsersList'
                },
                {
                    path: 'user/:id',
                    component: () => import('./components/admin/users/AdminUserFind'),
                    name: 'AdminUserFind'
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
