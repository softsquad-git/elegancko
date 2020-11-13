<template>
    <div>
        <div class="admin-page-title">
            {{ title }}
            <router-link :to="{name: 'AdminUsersList'}" class="fa fa-eye"></router-link>
        </div>
        <circle-spinner v-if="isLoading" :loading="isLoading"></circle-spinner>
        <table v-if="!isLoading" class="table">
            <thead>
            <tr>
            </tr>
            </thead>
            <tbody>
            <tr><th scope="row">Wszyscy</th><td>{{ data.count_users }}</td></tr>
            <tr><th scope="row">Aktywni</th><td>{{ data.count_users_active }}</td></tr>
            <tr><th scope="row">Zablokowani</th><td>{{ data.count_users_lock }}</td></tr>
            <tr><th scope="row">Administratorzy</th><td>{{ data.count_users_admin }}</td></tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {CircleSpinner} from 'vue-spinners'
export default {
    name: "UsersAdminReport",
    components: {CircleSpinner},
    data() {
        return {
            title: 'Użytkownicy',
            data: {},
            isLoading: false
        }
    },
    methods: {
        loadData() {
            this.isLoading = true;
            this.$axios.get('admin/reports/users')
            .then((data) => {
                this.isLoading = false;
                this.data = data.data;
            }).catch((error) => this.handleAjaxError(error))
        }
    },
    created() {
        this.loadData();
    }
}
</script>

<style scoped>

</style>
