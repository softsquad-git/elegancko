<template>
    <div class="admin-page">
        <h4 class="title">
            {{ title }}
        </h4>
        <div class="content mt-3">
            <form @submit.prevent="save">
                <div class="form-group row">
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <input id="name" aria-label="Imie" class="form-control" placeholder="Imię" v-model="data.name">
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <input id="last_name" aria-label="Nazwisko" class="form-control" placeholder="Nazwisko"
                               v-model="data.last_name">
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <input id="phone" aria-label="Telefon" class="form-control" placeholder="Telefon"
                               v-model="data.phone">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <input id="city" aria-label="Miasto" class="form-control" placeholder="Miasto"
                               v-model="data.city">
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <input id="post_code" aria-label="Kod pocztowy" class="form-control" placeholder="Kod pocztowy"
                               v-model="data.post_code">
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <input id="address" aria-label="Adres" class="form-control" placeholder="Adres"
                               v-model="data.address">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-12">
                        <b-button type="submit" variant="outline-secondary"><b-spinner v-if="loadSpinner" small></b-spinner> Zapisz</b-button>
                    </div>
                </div>
            </form>
            <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <admin-account-email-setting/>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <admin-account-password-setting/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AdminAccountPasswordSetting from "./AdminAccountPasswordSetting";
import AdminAccountEmailSetting from "./AdminAccountEmailSetting";

export default {
    name: "AdminAccountSetting",
    components: {AdminAccountEmailSetting, AdminAccountPasswordSetting},
    data() {
        return {
            title: 'Twoje dane',
            data: {
                name: '',
                last_name: '',
                phone: '',
                city: '',
                post_code: '',
                address: '',
                user_id: ''
            },
            loadSpinner: false
        }
    },
    methods: {
        save() {
            this.loadSpinner = true;
            this.$axios.post('settings/basic-data', this.data)
                .then((data) => {
                    this.loadSpinner = false;
                    if (data.data.success === 1) {
                        this.loadData();
                        this.$notify({
                            group: 'notification-success',
                            title: 'Udało się',
                            text: 'Dane zostały zapisane'
                        })
                    }
                }).catch((error) => {
                    this.loadSpinner = false;
                    this.handleAjaxError(error)
            })
        },
        loadData() {
            let url = 'user/logged';
            if (this.$route.params.id) {
                url = `admin/users/find/${this.$route.params.id}`
            }
            this.$axios.get(url)
                .then((data) => {
                    let user = data.data;
                    this.data.name = user.name;
                    this.data.last_name = user.last_name;
                    if (this.$route.params.id) {
                        user = data.data.data;
                        this.data.name = user.name.first;
                        this.data.last_name = user.name.last;
                        this.data.user_id = this.$route.params.id;
                    }
                    this.data.phone = user.phone;
                    this.data.city = user.city;
                    this.data.post_code = user.post_code;
                    this.data.address = user.address;
                }).catch((error) => this.handleAjaxError(error))
        },
    },
    watch: {
        '$route.params.id'() {
            this.loadData();
        }
    },
    created() {
        this.loadData();
    }
}
</script>

<style scoped>

</style>
