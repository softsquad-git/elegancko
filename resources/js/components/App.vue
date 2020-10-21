<template>
    <div class="page">
        <section class="header">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-4">
                        <div class="logo-text">
                            <img v-if="logo !== ''" :src="logo" :alt="service_name">
                            <span v-if="logo === ''">{{ service_name }}<sub>store</sub></span>
                        </div>
                    </div>
                    <div class="col-xl-9 col-lg-9 col-md-8">
                        <b-navbar toggleable="lg" type="light">
                            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                            <b-collapse id="nav-collapse" is-nav>
                                <b-navbar-nav>
                                    <b-nav-item :to="{name: 'IndexPage'}">Strona główna</b-nav-item>
                                    <b-nav-item :to="{name: 'ProductsIndex'}">Sklep</b-nav-item>
                                </b-navbar-nav>

                                <!-- Right aligned nav items -->
                                <b-navbar-nav class="ml-auto">
                                    <b-nav-form v-if="isSearchTopForm" @submit.prevent="search">
                                        <b-form-input v-model="params.title" size="sm" class="mr-sm-2"
                                                      placeholder="Search"></b-form-input>
                                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                                    </b-nav-form>
                                    <b-nav-item @click="isSearchTopForm ^= true" :to="{name: 'IndexPage'}"><span
                                        class="fa fa-search"></span></b-nav-item>
                                    <b-nav-item :to="{name: 'Login'}"><span class="fa fa-user"></span></b-nav-item>
                                    <b-nav-item :to="{name: 'BasketIndexPage'}"><span
                                        class="fa fa-shopping-basket"></span>
                                    </b-nav-item>

                                </b-navbar-nav>
                            </b-collapse>
                        </b-navbar>
                    </div>
                </div>
            </div>
        </section>
        <section class="body">
            <router-view/>
        </section>
        <footer>
            <div class="container">
               <div class="footer">
                   <h1><router-link class="mb-4" :to="{name: 'IndexPage'}"><span v-html="service_name"></span> </router-link></h1>
                   <div style="height: 40px"></div>
                   <router-link class="link" :to="'#'">Kontakt</router-link>
                   <a href="" class="link fb" target="_blank"><span class="fa fa-facebook"></span></a>
                   <router-link class="link" :to="'#'">Pomoc</router-link>
                   <div class="footer-info">
                       Copyright &copy 2020 | Created by: <a href="http://softsquad.pl/" target="_blank">SoftSquad</a>
                   </div>
               </div>
            </div>
        </footer>
        <vue-confirm-dialog></vue-confirm-dialog>
        <notifications group="notification-success" position="bottom left" type="success"/>
        <notifications group="notification-danger" position="bottom left" type="error"/>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            isSearchTopForm: false,
            params: {
                title: ''
            },
            service_name: '',
            logo: ''
        }
    },
    methods: {
        search() {

        }
    },
    created() {
        this.$axios.get('front/settings/find-by-type/service_name')
        .then((data) => {
            this.service_name = data.data.data.value;
            localStorage.setItem('service_name', this.service_name);
        })
        this.$axios.get('front/settings/find-by-type/logo')
        .then((data) => {
            this.logo = data.data.data.value
        })
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

.header {
    padding: 20px 0 20px 0;
}

.active {
    border-bottom: 1px solid #000;
    font-weight: 500;
}
sub{
     font-size: 15px;
}
</style>
