<template>
    <div class="auth-action">
        <h2 class="title mb-4">
            {{ title }}
        </h2>
        <form class="mt-4" @submit.prevent="save">
            <div class="form-group">
                <input id="email" class="form-control" :aria-label="$t('form.email')" type="email" :placeholder="$t('form.email')"
                       v-model="data.email">
            </div>
            <div class="form-group">
                <input id="password" class="form-control" :aria-label="$t('form.pass')" type="password" :placeholder="$t('form.pass')"
                       v-model="data.password">
            </div>
            <div class="form-group row mr-0 ml-0">
                <b-button type="submit" variant="outline-secondary">{{ title }}</b-button>
                <router-link :to="{name: 'Register'}" class="link-register" :title="$t('nav.auth.register')">{{ $t('nav.auth.register') }}
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
            title: this.$t('nav.auth.login'),
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
                        localStorage.setItem('name', data.data.name)
                        window.location.reload();
                        return this.$router.push({name: 'IndexPage'})
                    }
                })
                .catch((error) => {
                    this.handleAjaxError(error);
                })
        },
    }
}
</script>

<style scoped>

</style>
