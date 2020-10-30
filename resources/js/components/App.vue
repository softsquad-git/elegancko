<template>
    <div class="page">
        <section class="header sticky-top">
            <b-navbar toggleable="lg" type="light">
                <b-navbar-brand :to="{name: 'IndexPage'}" class="logo-text">{{ settings[0].value }}</b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item :to="{name: 'IndexPage'}">Strona główna</b-nav-item>
                        <b-nav-item :to="{name: 'ProductsIndex'}">Sklep</b-nav-item>
                        <b-nav-item :to="{name: 'CategoriesIndex'}">Kategorie</b-nav-item>
                        <b-nav-item v-for="page in pagesTop.slice(0, 5)" :to="{name: 'ProductsIndex'}">{{ page.title }}</b-nav-item>
                        <b-nav-item-dropdown v-if="pagesTop.length > 5" right>
                            <b-dropdown-item v-for="page in pagesTop.slice(5, 100)" href="#">{{page.title}}</b-dropdown-item>
                        </b-nav-item-dropdown>

                    </b-navbar-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item :to="{name: 'Login'}"><span class="fa fa-user"></span></b-nav-item>
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
                        <a class="mr-2" :href="'tel:'+settings[1].value"><span class="fc fa fa-phone"></span> {{ settings[1].value }}</a>
                        <a class="mr-2" :href="'mailto:'+settings[3].value"><span class="fc fa fa-envelope"></span> {{ settings[3].value }}</a>
                        <span class="fc fa fa-map-marker-alt"></span> {{ settings[2].value }}
                    </div>
                    <div class="links">
                        <router-link v-for="page in pagesBottom" :to="''">{{ page.title }}</router-link>
                    </div>
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
            params: {
                title: ''
            },
            data: [
                'service_name',
                'shop_address',
                'email_contact',
                'phone_contact'
            ],
            settings: [],
            pagesTop: [],
            pagesBottom: []
        }
    },
    created() {
        this.$axios.post('front/settings/find-by-types', this.data)
            .then((data) => {
                this.settings = data.data.data;
            })
        this.$axios.get(`front/pages/all?position=bottom&pagination=8`)
        .then((data) => {
            this.pagesBottom = data.data.data
        })
        this.$axios.get(`front/pages/all?position=top&pagination=20`)
        .then((data) => {
            this.pagesTop = data.data.data;
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
