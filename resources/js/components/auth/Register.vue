<template>
    <div class="auth-action">
        <h2 class="title mb-4">
            {{title}}
        </h2>
        <form class="mt-4" @submit.prevent="save">
            <div class="form-group">
                <input id="name" class="form-control" aria-label="Imię" type="text" placeholder="Imię"
                       v-model="data.name">
            </div>
            <div class="form-group">
                <input id="last_name" class="form-control" aria-label="Nazwisko" placeholder="Nazwisko"
                       v-model="data.last_name">
            </div>
            <div class="form-group">
                <input id="email" class="form-control" aria-label="E-mail" type="email" placeholder="E-mail"
                       v-model="data.email">
            </div>
            <div class="form-group">
                <input id="password" class="form-control" aria-label="Hasło" type="password" placeholder="Hasło"
                       v-model="data.password">
            </div>
            <span class="link-register mb-3 pl-0 pointer" @click="showMoreInput ^= true">
                <span class="fa" :class="showMoreInput ? 'fa-chevron-up' : 'fa-chevron-down'"
                      :title="showMoreInput ? 'mniej' : 'więcej'"></span>
            </span>
            <div v-if="showMoreInput">
                <div class="form-group">
                    <input id="phone" class="form-control" aria-label="Telefon" type="tel" placeholder="Telefon"
                           v-model="data.phone">
                </div>
                <div class="form-group row">
                    <div class="col-xl-4 col-lg-4 col-md-4">
                        <input id="post_code" class="form-control" aria-label="Kod pocztowy" type="text"
                               placeholder="Kod pocztowy" v-model="data.post_code">
                    </div>
                    <div class="col-xl-8 col-lg-8 col-md-8">
                        <input id="city" class="form-control" aria-label="Miasto" type="text" placeholder="Miasto"
                               v-model="data.city">
                    </div>
                </div>
                <div class="form-group">
                    <input id="address" class="form-control" aria-label="Adres" type="text" placeholder="Adres"
                           v-model="data.address">
                </div>
            </div>
            <div class="form-group row mr-0 ml-0">
                <button type="submit" class="btn main-btn">{{title}}</button>
                <router-link :to="{name: 'Login'}" class="link-register" title="Zarejestruj się">Zaloguj się
                </router-link>
            </div>
        </form>
    </div>
</template>

<script>
    import Index from "../pages/products/Index";

    export default {
        name: "Register",
        components: {Index},
        data() {
            return {
                title: 'Zarejestruj się',
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
                        //
                    })
            }
        },
        created() {
            document.title = this.title;
        }
    }
</script>

<style scoped>

</style>
