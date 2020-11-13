<template>
    <div class="auth-action">
        <h2 class="title mb-4">
            {{title}}
        </h2>
        <form class="mt-4" @submit.prevent="save">
            <div class="form-group">
                <input id="name" class="form-control" :aria-label="$t('form.first_name')" type="text" :placeholder="$t('form.first_name')"
                       v-model="data.name">
            </div>
            <div class="form-group">
                <input id="last_name" class="form-control" :aria-label="$t('form.last_name')" :placeholder="$t('form.last_name')"
                       v-model="data.last_name">
            </div>
            <div class="form-group">
                <input id="email" class="form-control" :aria-label="$t('form.email')" type="email" :placeholder="$t('form.email')"
                       v-model="data.email">
            </div>
            <div class="form-group">
                <input id="password" class="form-control" :aria-label="$t('form.pass')" type="password" :placeholder="$t('form.pass')"
                       v-model="data.password">
            </div>
            <span class="link-register mb-3 pl-0 pointer" @click="showMoreInput ^= true">
                <span class="fa" :class="showMoreInput ? 'fa-chevron-up' : 'fa-chevron-down'"
                      :title="showMoreInput ? $t('form.min') : $t('form.more')"></span>
            </span>
            <div v-if="showMoreInput">
                <div class="form-group">
                    <input id="phone" class="form-control" :aria-label="$t('form.phone')" type="tel" :placeholder="$t('form.phone')"
                           v-model="data.phone">
                </div>
                <div class="form-group row">
                    <div class="col-xl-4 col-lg-4 col-md-4">
                        <input id="post_code" class="form-control" :aria-label="$t('form.post_code')" type="text"
                               :placeholder="$t('form.post_code')" v-model="data.post_code">
                    </div>
                    <div class="col-xl-8 col-lg-8 col-md-8">
                        <input id="city" class="form-control" :aria-label="$t('form.city')" type="text" :placeholder="$t('form.city')"
                               v-model="data.city">
                    </div>
                </div>
                <div class="form-group">
                    <input id="address" class="form-control" :aria-label="$t('form.address')" type="text" :placeholder="$t('form.address')"
                           v-model="data.address">
                </div>
            </div>
            <div class="form-group row mr-0 ml-0">
                <b-button type="submit" variant="outline-secondary">{{title}}</b-button>
                <router-link :to="{name: 'Login'}" class="link-register" :title="$t('nav.auth.login')">{{ $t('nav.auth.login') }}
                </router-link>
            </div>
        </form>
        <meta-component
            type="REGISTER"/>
    </div>
</template>

<script>
    import Index from "../pages/products/Index";
    import MetaComponent from "../pages/MetaComponent";

    export default {
        name: "Register",
        components: {MetaComponent, Index},
        data() {
            return {
                title: this.$t('nav.auth.register'),
                showMoreInput: false,
                data: {
                    name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    terms: false,
                    post_code: '',
                    city: '',
                    address: '',
                    phone: ''
                }
            }
        },
        methods: {
            save() {
                this.$axios.post('auth/register', this.data)
                    .then((data) => {
                        if (data.data.success === 1) {
                            this.$router.push({name: 'Login'})
                        }
                    })
                    .catch((error) => {
                        this.handleAjaxError(error);
                    })
            }
        }
    }
</script>

<style scoped>

</style>
