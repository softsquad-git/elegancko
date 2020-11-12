<template>
    <div class="page">
        <section class="header sticky-top">
            <b-navbar toggleable="lg" type="light">
                <b-navbar-brand :to="{name: 'IndexPage'}" class="logo-text">{{ service_name }}</b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item :to="{name: 'IndexPage'}">{{ $t('nav.front.home') }}</b-nav-item>
                        <b-nav-item :to="{name: 'ProductsIndex'}">{{ $t('nav.front.shop') }}</b-nav-item>
                        <b-nav-item :to="{name: 'CategoriesIndex'}">{{ $t('nav.front.categories') }}</b-nav-item>
                        <b-nav-item v-for="page in pagesTop.slice(0, 5)" :to="{name: 'ShowPage', params: {title: page.title, id: page.id}}">{{ page.title }}</b-nav-item>
                        <b-nav-item-dropdown v-if="pagesTop.length > 5" right>
                            <b-dropdown-item v-for="page in pagesTop.slice(5, 100)" :to="{name: 'ShowPage', params: {title: page.title, id: page.id}}">{{page.title}}</b-dropdown-item>
                        </b-nav-item-dropdown>

                    </b-navbar-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item v-if="token" @click="redirect"><span class="fa fa-user"></span> {{ $t('nav.auth.hello') }} {{name}}</b-nav-item>
                        <b-nav-item v-if="!token" :to="{name: 'Login'}"><span class="fa fa-user"></span></b-nav-item>
                        <b-nav-item :to="{name: 'BasketIndexPage'}"><span
                            class="fa fa-shopping-basket"></span>
                        </b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </section>
        <section class="body">
            <router-view/>
        </section>
        <footer>
            <div class="container">
                <div class="footer">
                    <div class="c">
                        <a class="mr-2" :href="'tel:'+phone"><span class="fc fa fa-phone"></span> {{ phone }}</a>
                        <a class="mr-2" :href="'mailto:'+mail"><span class="fc fa fa-envelope"></span> {{ mail }}</a>
                        <span class="fc fa fa-map-marker-alt"></span> {{ location }}
                    </div>
                    <div class="links">
                        <router-link v-if="pagesBottom.length > 0" v-for="page in pagesBottom" :to="{name: 'ShowPage', params: {title: page.title, id: page.id}}">{{ page.title }}</router-link>
                    </div>
                    <div class="text-center mt-3">
                        <select-language/>
                            <a :href="fb" target="_blank" class="ml-2">
                               {{ $t('nav.front.sm') }} <span class="fa fa-facebook fb"></span>
                            </a>
                    </div>
                    <div class="footer-info">
                        Copyright &copy 2020 | Created by: <a href="http://softsquad.pl/" target="_blank">SoftSquad</a>
                    </div>
                </div>
            </div>
        </footer>
        <vue-confirm-dialog></vue-confirm-dialog>
        <notifications group="notification-success" position="bottom left" type="success"/>
        <notifications group="notification-error" position="bottom left" type="error"/>
        <vue-progress-bar></vue-progress-bar>
    </div>
</template>

<script>
import SelectLanguage from "./SelectLanguage";
export default {
    name: "App",
    components: {
        SelectLanguage
        //
    },
    data() {
        return {
            loading: true,
            params: {
                title: ''
            },
            fb: '',
            service_name: '',
            mail: '',
            phone: '',
            location: '',
            pagesTop: [],
            pagesBottom: [],
            token: localStorage.getItem('token'),
            name: localStorage.getItem('name')
        }
    },
    methods: {
        redirect() {
            this.$axios.get('user/logged')
            .then((data) => {
                let role = data.data.role;
                if(role == 2) {
                    return this.$router.push({name: 'AdminPageIndex'})
                }
                if (role == 1) {
                    return this.$router.push({name: 'AccountPageIndex'})
                }
            }).catch(() => {
                this.$router.push({
                    name: 'Logout'
                })
            })
        }
    },
    created() {
        this.$axios.get(`front/pages/all?position=bottom&pagination=8`)
        .then((data) => {
            this.pagesBottom = data.data.data
        }).catch((error) => this.handleAjaxError(error))
        this.$axios.get(`front/pages/all?position=top&pagination=20`)
        .then((data) => {
            this.pagesTop = data.data.data;
        }).catch((error) => this.handleAjaxError(error))

        this.$axios.get('front/settings/find-by-type/service_name')
            .then((data) => {
                this.service_name = data.data.data.value
            });
        this.$axios.get('front/settings/find-by-type/shop_address')
            .then((data) => {
                this.location = data.data.data.value
            });
        this.$axios.get('front/settings/find-by-type/email_contact')
            .then((data) => {
                this.mail = data.data.data.value
            });
        this.$axios.get('front/settings/find-by-type/phone_contact')
            .then((data) => {
                this.phone = data.data.data.value
            });
        this.$axios.get('front/settings/find-by-type/facebook_url')
            .then((data) => {
                this.fb = data.data.data.value
            });
    }
}
</script>

<style scoped>
section.header {
    background: #fff;
    border-bottom: 1px solid #e4e4e4;
}

.logo img {
    width: 150px;
}

.fb {
    background: #4867aa;
    padding: 3px 5px 5px 5px;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    color: #fff;
    font-size: 14px;
}

.header {
    padding: 20px 0 20px 0;
}

.active {
    border-bottom: 1px solid #000;
    font-weight: 500;
}

footer {
    text-align: center;
    margin-top: 80px;
}
.footer a, .footer .c {
    color: gray;
}

sub {
    font-size: 15px;
}
.footer .links {
    margin-top: 40px;
}.footer .links a {
     font-weight: bold;
     text-transform: uppercase;
     font-size: 13px;
    padding: 10px;
 }
</style>
