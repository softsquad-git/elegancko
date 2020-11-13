<template>
<div class="admin-page">
    <div class="row">
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="admin-page-title">{{ adminData.title }} <router-link :to="{name: 'AdminAccountSetting'}" class="fa fa-edit"></router-link> </div>
            <circle-spinner v-if="isLoading" :loading="isLoading"></circle-spinner>
            <table v-if="!isLoading" class="table">
                <thead>
                <tr>
                </tr>
                </thead>
                <tbody>
                <tr><th scope="row">Imię i nazwisko</th><td>{{ adminData.data.name }} {{ adminData.data.last_name }}</td></tr>
                <tr><th scope="row">E-mail</th><td>{{ adminData.data.email }}</td></tr>
                <tr><th scope="row">Telefon</th><td>{{ adminData.data.phone ? adminData.data.phone : '---'}}</td></tr>
                <tr><th scope="row">Miasto</th><td>{{ adminData.data.city ? adminData.data.city : '---' }}</td></tr>
                <tr><th scope="row">Kod pocztowy</th><td>{{ adminData.data.post_code ? adminData.data.post_code : '---' }}</td></tr>
                <tr><th scope="row">Adres</th><td>{{ adminData.data.address ? adminData.data.address : '---' }}</td></tr>
                </tbody>
            </table>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <users-admin-report/>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <orders-admin-report/>
        </div>
    </div>
    <div class="row">
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <messages-admin-report/>
        </div>
    </div>
</div>
</template>

<script>
    import UsersAdminReport from "./reports/UsersAdminReport";
    import OrdersAdminReport from "./reports/OrdersAdminReport";
    import MessagesAdminReport from "./reports/MessagesAdminReport";
    import { CircleSpinner } from 'vue-spinners'
    export default {
        name: "AdminPageIndex",
        components: {MessagesAdminReport, OrdersAdminReport, UsersAdminReport, CircleSpinner},
        data() {
            return {
                title: 'Panel administratora',
                adminData: {
                    title: 'Dane podstawowe',
                    data: []
                },
                isLoading: false
            }
        },
        methods: {
            loadBasicData() {
                this.isLoading = true;
                this.$axios.get('user/logged')
                .then((data) => {
                    this.isLoading = false;
                    this.adminData.data = data.data;
                }).catch((error) => this.handleAjaxError(error))
            }
        },
        created() {
            this.loadBasicData();
            document.title = this.title;
        }
    }
</script>

<style scoped>

</style>
