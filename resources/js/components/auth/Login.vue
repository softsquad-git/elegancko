<template>
    <div class="auth-action">
        <h2 class="title mb-4">
            {{ title }}
        </h2>
        <form class="mt-4" @submit.prevent="save">
            <div class="form-group">
                <input id="email" class="form-control" aria-label="E-mail" type="email" placeholder="E-mail"
                       v-model="data.email">
            </div>
            <div class="form-group">
                <input id="password" class="form-control" aria-label="Hasło" type="password" placeholder="Hasło"
                       v-model="data.password">
            </div>
            <div class="form-group row mr-0 ml-0">
                <b-button type="submit" variant="outline-secondary">{{ title }}</b-button>
                <router-link :to="{name: 'Register'}" class="link-register" title="Zarejestruj się">Zarejestruj się
                </router-link>
            </div>
        </form>
        <meta-component
            type="LOGIN"/>
    </div>
</template>

<script>
import Index from "../pages/products/Index";
import MetaComponent from "../pages/MetaComponent";

export default {
    name: "Login",
    components: {MetaComponent, Index},
    data() {
        return {
            title: 'Zaloguj się',
            data: {
                email: '',
                password: ''
            },
            errors: [],
            msg: ''
        }
    },
    methods: {
        save() {
            this.$axios.post('auth/login', this.data)
                .then((data) => {
                    if (data.data.success === 1) {
                        localStorage.setItem('token', data.data.access_token);
                        localStorage.setItem('userId', data.data.user_id);
                        this.redirect();
                    }
                })
                .catch((error) => {
                    this.handleAjaxError(error);
                })
        },
        redirect() {
            if (localStorage.getItem('token')) {
                this.$axios.get('user/logged')
                    .then((data) => {
                        let role = data.data.role;
                        if (role === 2) {
                            this.$router.push({name: 'AdminPageIndex'})
                        } else {
                            this.$router.push({name: 'AccountPageIndex'})
                        }
                    })
            }
            return this;
        }
    },
    created() {
        this.redirect();
    }
}
</script>

<style scoped>

</style>
