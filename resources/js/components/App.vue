<template>
    <div class="page">
        <section class="header">
            <div class="container">
                <div class="logo text-center">
                    <img src="https://molerin.pl/media/logo/websites/1/logo.png" alt="logo"/>
                </div>
                <b-navbar toggleable="lg" type="light">
                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                    <b-collapse id="nav-collapse" is-nav>
                        <b-navbar-nav>
                            <b-nav-item :to="{name: 'IndexPage'}">Strona główna</b-nav-item>
                        </b-navbar-nav>

                        <!-- Right aligned nav items -->
                        <b-navbar-nav class="ml-auto">
                            <b-nav-form v-if="isSearchTopForm" @submit.prevent="search">
                                <b-form-input v-model="params.title" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                            </b-nav-form>
                            <b-nav-item @click="isSearchTopForm ^= true" :to="{name: 'IndexPage'}"><span
                                class="fa fa-search"></span></b-nav-item>
                            <b-nav-item :to="{name: 'Login'}"><span class="fa fa-user"></span></b-nav-item>
                            <b-nav-item :to="{name: 'IndexPage'}"><span class="fa fa-shopping-basket"></span>
                            </b-nav-item>

                        </b-navbar-nav>
                    </b-collapse>
                </b-navbar>
            </div>
        </section>
        <section class="body">
            <router-view/>
        </section>
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
            }
        }
    },
    methods: {
        search() {

        }
    }
}
</script>

<style scoped>
section.header {
    background: #febccb;
}

.logo img {
    width: 150px;
}

.header {
    padding: 40px 0 10px 0;
}

.active {
    border-bottom: 1px solid #000;
    font-weight: 500;
}
</style>
