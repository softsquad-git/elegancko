import Vue from 'vue';
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from "./components/App";
import IndexPage from "./components/pages/IndexPage";
import store from './store';
import auth from './middleware/auth';
import guest from './middleware/guest';
import createPersistedState from "vuex-persistedstate";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
require('./bootstrap');


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'IndexPage',
            component: IndexPage
        },
        {
            path: '/products/:category?',
            name: 'ProductsIndex',
            component: () => import('./components/pages/products/Index')
        },
        {
            path: '/product/:title/:id',
            name: 'ProductShow',
            component: () => import('./components/pages/products/Show')
        },
        {
            path: '/basket',
            name: 'BasketIndexPage',
            component: () => import('./components/pages/basket/BasketIndexPage')
        },
        {
            path: '/order/pay/:orderId',
            component: () => import('./components/orders/OrderPay'),
            name: 'OrderPay'
        },
        {
            path: '/thank-you',
            component: () => import('./components/orders/OrderThx'),
            name: 'OrderThx'
        },
        {
            path: '/auth',
            component: () => import('./components/auth/AuthLayout'),
            meta: {
                auth: false,
                middleware: [guest]
            },
            children: [
                {
                    path: 'login',
                    name: 'Login',
                    component: () => import('./components/auth/Login'),
                    meta: {
                        auth: false,
                        middleware: [guest]
                    }
                },
                {
                    path: 'register',
                    name: 'Register',
                    component: () => import('./components/auth/Register'),
                    meta: {
                        auth: false,
                        middleware: [guest]
                    }
                }
            ]
        },
        {
            path: '/admin',
            component: () => import('./components/admin/AdminLayout'),
            meta: {
              auth: true,
              middleware: [auth]
            },
            children: [
                {
                    path: '',
                    component: () => import('./components/admin/AdminPageIndex'),
                    name: 'AdminPageIndex',
                    meta: {
                        auth: true,
                        middleware: [auth]
                    }
                },
                {
                    path: 'product/:category?',
                    component: () => import('./components/admin/products/AdminProductsList'),
                    name: 'AdminProductsList',
                    meta: {
                        auth: true,
                        middleware: [auth]
                    }
                },
                {
                    path: 'product/:action/:id?',
                    component: () => import('./components/admin/products/AdminDataProduct'),
                    name: 'AdminDataProduct',
                    meta: {
                        auth: true,
                        middleware: [auth]
                    }
                },
                {
                    path: 'pages',
                    component: () => import('./components/admin/pages/AdminPagesList'),
                    name: 'AdminPagesList',
                    meta: {
                        auth: true,
                        middleware: [auth]
                    }
                },
                {
                    path: 'page/:action/:id?',
                    component: () => import('./components/admin/pages/AdminDataPage'),
                    name: 'AdminDataPage',
                    meta: {
                        auth: true,
                        middleware: [auth]
                    }
                },
                {
                    path: 'categories',
                    component: () => import('./components/admin/categories/AdminCategoriesList'),
                    name: 'AdminCategoriesList',
                    meta: {
                        auth: true,
                        middleware: [auth]
                    }
                },
                {
                    path: 'category/:action/:id?',
                    component: () => import('./components/admin/categories/AdminDataCategory'),
                    name: 'AdminDataCategory',
                    meta: {
                        auth: true,
                        middleware: [auth]
                    }
                },
                {
                    path: 'users',
                    component: () => import('./components/admin/users/AdminUsersList'),
                    name: 'AdminUsersList',
                    meta: {
                        auth: true,
                        middleware: [auth]
                    }
                },
                {
                    path: 'user/:id',
                    component: () => import('./components/admin/users/AdminUserFind'),
                    name: 'AdminUserFind',
                    meta: {
                        auth: true,
                        middleware: [auth]
                    }
                },
                {
                    path: 'settings/page',
                    component: () => import('./components/admin/settings/AdminPageSetting'),
                    name: 'AdminPageSetting',
                    meta: {
                        auth: true,
                        middleware: [auth]
                    }
                },
                {
                    path: 'settings/page/:action/:id?',
                    component: () => import('./components/admin/settings/AdminDataSetting'),
                    name: 'AdminDataSetting',
                    meta: {
                        auth: true,
                        middleware: [auth]
                    }
                },
                {
                    path: 'settings/account/:id?',
                    component: () => import('./components/admin/settings/AdminAccountSetting'),
                    name: 'AdminAccountSetting',
                    meta: {
                        auth: true,
                        middleware: [auth]
                    }
                },
                {
                    path: 'orders',
                    component: () => import('./components/admin/orders/AdminOrdersList'),
                    name: 'AdminOrdersList',
                    meta: {
                        auth: true,
                        middleware: [auth]
                    }
                },
                {
                    path: 'order/find/:id/:action',
                    component: () => import('./components/admin/orders/AdminOrderFind'),
                    name: 'AdminOrderFind',
                    meta: {
                        auth: true,
                        middleware: [auth]
                    }
                }
            ]
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next();
    }
    const middleware = to.meta.middleware;
    const context = {
        to,
        from,
        next
    };
    return middleware[0]({
        ...context
    })
});

const app = new Vue({
    el: '#app',
    components: {App},
    router,
    store: new Vuex.Store({
        modules: {
            store
        },
        plugins: [createPersistedState({

        })]
    })
});
